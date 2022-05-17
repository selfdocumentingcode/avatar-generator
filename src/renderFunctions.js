import { stageSvgEl } from './elementContainer';
import { getComponentLayer } from './componentsContainer';

export function renderBackground(generator) {
    const bgColor = generator.getBackgroundColor();

    const backgroundRect = stageSvgEl.querySelector('g#background-layer rect');

    backgroundRect.setAttributeNS(null, 'fill', bgColor);
    backgroundRect.setAttributeNS(null, 'stroke', bgColor);
}

export async function renderBody(generator) {
    const bodyConfig = generator.getBodyConfig();

    const bodyComponent = getComponentLayer('body', 0);

    await addLayerToStage(bodyComponent); // Maybe add to temp stage and then move

    const newBodySize = applySvgTransforms(bodyComponent, { color: bodyConfig.color, scale: bodyConfig.scale });

    return newBodySize;
}

export async function renderNosemouth(generator) {
    const nosemouthOffsetY = 16;

    const nousemouthConfig = generator.getNosemouthConfig();

    const nosemouthComponent = getComponentLayer('nosemouth', nousemouthConfig.variant);

    await addLayerToStage(nosemouthComponent);

    const newSize = applySvgTransforms(nosemouthComponent, {
        color: nousemouthConfig.color,
        scale: nousemouthConfig.scale,
        offsetY: nosemouthOffsetY,
    });

    return newSize;
}

async function renderEye(eyesConfig) {
    const eyeComponent = getComponentLayer('eye', eyesConfig.variant);

    await addLayerToStage(eyeComponent);

    const eyeOffsetY = -24;
    const eyeOffsetX = Math.round(eyesConfig.distance / 2);

    const newEyeSize = applySvgTransforms(eyeComponent, {
        color: eyesConfig.color,
        scale: eyesConfig.scale,
        offsetX: eyeOffsetX,
        offsetY: eyeOffsetY,
    });

    return newEyeSize;
}

export async function renderEyes(generator) {
    const eyesConfig = generator.getEyesConfig();

    // Left eye
    await renderEye(eyesConfig);

    // Right eye
    const rightEyeConfig = { ...eyesConfig, distance: -eyesConfig.distance };
    await renderEye(rightEyeConfig);
}

async function renderEar(earsConfig, bodyR) {
    const earComponent = getComponentLayer('ear', earsConfig.variant);

    await addLayerToStage(earComponent);

    const newEarSize = applySvgTransforms(earComponent, {
        color: earsConfig.color,
        scale: earsConfig.scale,
    });

    const translateDeg = earsConfig.translateDeg;
    const translateRad = (Math.PI / 180) * translateDeg;

    // const translateX = (bodyR + newEarSize.width / 2 ) * Math.cos(translateRad);
    // const translateY = (bodyR + newEarSize.height / 2) * Math.sin(translateRad);

    const translateX = ((bodyR + newEarSize.width / 2) / earsConfig.scale) * Math.cos(translateRad);
    const translateY = ((bodyR + newEarSize.height / 2) / earsConfig.scale) * Math.sin(translateRad);

    applySvgTranslation(earComponent, { x: translateX, y: translateY });

    const midPointDeg = 270;
    const rotationDeg = earsConfig.translateDeg - midPointDeg;

    applySvgRotation(earComponent, rotationDeg);

    return newEarSize;
}

export async function renderEars(generator, bodySize) {
    const earsConfig = generator.getEarsConfig();

    const bodyR = Math.round(bodySize.width / 2);

    // Render left ear
    await renderEar(earsConfig, bodyR);

    // Render right ear
    // Mirror translateDeg and rotation
    const midPointDeg = 270;
    const rightEarTranslateDeg = earsConfig.translateDeg + 2 * (midPointDeg - earsConfig.translateDeg);
    const rightEarRotation = -earsConfig.rotation;

    const rightEarConfig = { ...earsConfig, translateDeg: rightEarTranslateDeg, rotation: rightEarRotation };

    await renderEar(rightEarConfig, bodyR);
}

function applySvgTranslation(componentLayer, translation) {
    const { x, y } = translation;

    let transform = componentLayer.getAttributeNS(null, 'transform') ?? '';

    transform += ` translate(${x} ${y})`;

    componentLayer.setAttributeNS(null, 'transform', transform.trim());
}

function applySvgRotation(componentLayer, rotationDeg) {
    const fillableEl = componentLayer.querySelector('[fill]');

    let transform = fillableEl.getAttributeNS(null, 'transform') ?? '';

    // fillableEl.setAttributeNS(null, 'transform-origin', 'center');

    const rect = fillableEl.getBoundingClientRect();

    const rectCenterX = rect.x + rect.width / 2;
    const rectCenterY = rect.y + rect.height / 2;

    const relativeCoords = getRelativeCoordinates(rectCenterX, rectCenterY, stageSvgEl, fillableEl);

    const positionX = relativeCoords.x;
    const positionY = relativeCoords.y;

    transform += ` rotate(${rotationDeg} ${positionX} ${positionY})`;

    fillableEl.setAttributeNS(null, 'transform', transform.trim());
}

function applySvgTransforms(componentLayer, params) {
    const { color, offsetX, offsetY } = params;
    const { scale } = params;
    // const scale = 0.5;

    const fillableEl = componentLayer.querySelector('[fill]');

    fillableEl.setAttributeNS(null, 'fill', color);
    fillableEl.setAttributeNS(null, 'stroke', color);

    componentLayer.setAttributeNS(null, 'transform-origin', 'center');

    const originalRect = componentLayer.getBoundingClientRect();

    let transform = componentLayer.getAttributeNS(null, 'transform') ?? '';

    transform += ` scale(${scale})`;

    const originalWidth = originalRect.width;
    const originalHeight = originalRect.height;

    componentLayer.setAttributeNS(null, 'transform', transform);

    const scaledWidth = componentLayer.getBoundingClientRect().width;
    const scaledHeight = componentLayer.getBoundingClientRect().height;

    const stageSvgWidth = stageSvgEl.getAttributeNS(null, 'width');
    const stageSvgHeight = stageSvgEl.getAttributeNS(null, 'height');

    let translateToX = 0;
    let translateToY = 0;

    if (fillableEl.tagName === 'path') {
        translateToX = Math.round(stageSvgWidth / 2 - originalWidth / 2) + (offsetX ?? 0);
        translateToY = Math.round(stageSvgHeight / 2 - originalHeight / 2) + (offsetY ?? 0);
    } else {
        translateToX = Math.round(stageSvgWidth / 2) + (offsetX ?? 0);
        translateToY = Math.round(stageSvgHeight / 2) + (offsetY ?? 0);
    }

    transform += ` translate(${translateToX} ${translateToY})`;

    componentLayer.setAttributeNS(null, 'transform', transform.trim());

    return {
        width: scaledWidth,
        height: scaledHeight,
    };
}

async function addLayerToStage(componentLayer, x, y) {
    const fillableEl = componentLayer.querySelector('[fill]');

    const positionalAttributes = ['cx', 'cy', 'x', 'y'];

    positionalAttributes.forEach((a) => {
        if (fillableEl.hasAttributeNS(null, a)) {
            fillableEl.removeAttributeNS(null, a);
        }
    });

    stageSvgEl.appendChild(componentLayer);
}

export function clearStage() {
    Array.from(stageSvgEl.children)
        .filter((c) => c.id !== 'background-layer')
        .forEach((c) => c.remove());
}

function getRelativeCoordinates(x, y, svgContainer, svgElement) {
    var p = svgContainer.createSVGPoint();
    p.x = x;
    p.y = y;

    var ctm = svgElement.getScreenCTM();

    return p.matrixTransform(ctm.inverse());
}
