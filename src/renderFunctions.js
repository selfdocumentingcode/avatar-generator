import { stageSvgEl } from './elementContainer';
import { getComponentLayer } from './componentsContainer';

export function renderBackground(generator) {
    const bgColor = generator.getBackgroundColor();

    const backgroundRect = stageSvgEl.querySelector('g#background-layer rect');

    backgroundRect.setAttributeNS(null, 'fill', bgColor);
    backgroundRect.setAttributeNS(null, 'stroke', bgColor);
}

export async function renderBody(generator) {
    console.log('render body');

    const bodyConfig = generator.getBodyConfig();

    const bodyComponent = getComponentLayer('body', 0);

    await addLayerToStage(bodyComponent); // Maybe add to temp stage and then move

    const newBodySize = applySvgTransforms(bodyComponent, { color: bodyConfig.color, scale: bodyConfig.scale });

    console.log({ stageSvgEl, newBodySize });

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
    console.log('render eyes');

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

    // const positionX = canvasEl.width / 2 - newEarSize.width / 2;
    // const positionY = canvasEl.height / 2 - newEarSize.height / 2;

    const translateDeg = earsConfig.translateDeg;
    const translateRad = (Math.PI / 180) * translateDeg;

    const translateX = (bodyR + newEarSize.width / 2) * Math.cos(translateRad);
    const translateY = (bodyR + newEarSize.height / 2) * Math.sin(translateRad);

    applySvgTranslation(earComponent, { x: translateX, y: translateY });

    // const newPositionX = positionX + translateX;
    // const newPositionY = positionY + translateY;

    const midPointDeg = 270;
    const rotationDeg = earsConfig.translateDeg - midPointDeg;

    applySvgRotation(earComponent, rotationDeg); 

    return newEarSize;
}

export async function renderEars(generator, bodySize) {
    console.log('renderEars');

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

    let transform = componentLayer.getAttributeNS(null, 'transform') ?? '';

    // const svgCenterX = Math.round(scaledWidth / 2);
    // const svgCenterY = Math.round(scaledHeight / 2);

    // transform += ` rotate(${rotation} ${svgCenterX} ${svgCenterY})`;

    // console.log(fillableEl.getBBox());
    // console.log(fillableEl.getBoundingClientRect());

    // transform += ` rotate(${rotationDeg})`;
    console.log(componentLayer.getBBox());
    console.log(componentLayer.getBoundingClientRect());

    transform += ` rotate(35)`;

    componentLayer.setAttributeNS(null, 'transform', transform.trim());
}

function applySvgTransforms(componentLayer, params) {
    const { color, scale, offsetX, offsetY } = params;
    // const scale = 1;

    const fillableEl = componentLayer.querySelector('[fill]');

    console.log({ params, componentLayer, fillableEl });

    fillableEl.setAttributeNS(null, 'fill', color);
    fillableEl.setAttributeNS(null, 'stroke', color);

    componentLayer.setAttributeNS(null, 'transform-origin', 'center');

    let transform = componentLayer.getAttributeNS(null, 'transform') ?? '';

    transform += ` scale(${scale})`;

    // componentLayer.setAttributeNS(null, 'transform', transform);

    // console.log(componentLayer.getBBox());
    // console.log(componentLayer.getBoundingClientRect())

    const width = componentLayer.getBoundingClientRect().width;
    const height = componentLayer.getBoundingClientRect().height;

    console.log({ width, height });

    // const scaledWidth = Math.round(width * scale);
    // const scaledHeight = Math.round(height * scale);

    const scaledWidth = width;
    const scaledHeight = height;

    console.log({ scaledWidth, scaledHeight });

    // if (rotation) {
    //     // const svgCenterX = Math.round(scaledWidth / 2);
    //     // const svgCenterY = Math.round(scaledHeight / 2);

    //     // transform += ` rotate(${rotation} ${svgCenterX} ${svgCenterY})`;

    //     transform += ` rotate(${rotation})`;
    // }

    const stageSvgWidth = stageSvgEl.getAttributeNS(null, 'width');
    const stageSvgHeight = stageSvgEl.getAttributeNS(null, 'height');

    // const translateToX = Math.round(stageSvgWidth / 2) + (offsetX ?? 0);
    // const translateToY = Math.round(stageSvgHeight / 2) + (offsetY ?? 0);

    let translateToX = 0;
    let translateToY = 0;

    if (fillableEl.tagName === 'path') {
        translateToX = Math.round(stageSvgWidth / 2 - scaledWidth / 2) + (offsetX ?? 0);
        translateToY = Math.round(stageSvgHeight / 2 - scaledHeight / 2) + (offsetY ?? 0);
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
