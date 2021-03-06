import { stageSvgEl, snapshotContainerEl } from './elementContainer';
import { getComponentLayer } from './componentsContainer';
import {
    addLayerToStage,
    applySvgTranslation,
    applySvgTransforms,
    addLayerToStage,
    applySvgFlipHorizontal,
    applySvgRotation,
} from './svgFunctions';

export function renderBackground(generator) {
    const bgColor = generator.getBackgroundColor();

    const backgroundRect = stageSvgEl.querySelector('g#background-layer rect');

    backgroundRect.setAttributeNS(null, 'fill', bgColor);
    backgroundRect.setAttributeNS(null, 'stroke', bgColor);

    saveSnapshot('background');
}

export async function renderBody(generator) {
    const bodyConfig = generator.getBodyConfig();

    const bodyComponent = getComponentLayer('body', 0);

    await addLayerToStage(bodyComponent); // Maybe add to temp stage and then move

    saveSnapshot('body1');

    const newBodySize = applySvgTransforms(bodyComponent, { color: bodyConfig.color, scale: bodyConfig.scale });

    saveSnapshot('body2');

    return newBodySize;
}

export async function renderNosemouth(generator) {
    const nosemouthOffsetY = 16;

    const nousemouthConfig = generator.getNosemouthConfig();

    const nosemouthComponent = getComponentLayer('nosemouth', nousemouthConfig.variant);

    await addLayerToStage(nosemouthComponent);

    saveSnapshot('noseMouth1');

    const newSize = applySvgTransforms(nosemouthComponent, {
        color: nousemouthConfig.color,
        scale: nousemouthConfig.scale,
        offsetY: nosemouthOffsetY,
    });

    saveSnapshot('noseMouth2');

    return newSize;
}

async function renderEye(eyesConfig) {
    const eyeComponent = getComponentLayer('eye', eyesConfig.variant);

    await addLayerToStage(eyeComponent);

    saveSnapshot('eye1');

    const eyeOffsetY = -24;
    const eyeOffsetX = Math.round(eyesConfig.distance / 2);

    const newEyeSize = applySvgTransforms(eyeComponent, {
        color: eyesConfig.color,
        scale: eyesConfig.scale,
        offsetX: eyeOffsetX,
        offsetY: eyeOffsetY,
    });

    saveSnapshot('eye2');

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

// TODO: get rid of flip param. flip after all transforms instead
async function renderEar(earsConfig, bodyR, flipHorizontal) {
    const earOffsetY = -24;

    const earComponent = getComponentLayer('ear', earsConfig.variant);

    await addLayerToStage(earComponent);

    saveSnapshot('ear1');

    if (flipHorizontal) {
        applySvgFlipHorizontal(earComponent);

        saveSnapshot('ear2');
    }   

    const newEarSize = applySvgTransforms(earComponent, {
        color: earsConfig.color,
        scale: earsConfig.scale,
        flipHorizontal,
    });

    saveSnapshot('ear3');

    const translateDeg = earsConfig.translateDeg;
    const translateRad = (Math.PI / 180) * translateDeg;

    let translateX = ((bodyR + newEarSize.width / 2) / earsConfig.scale) * Math.cos(translateRad);
    const translateY = ((bodyR + newEarSize.height / 2) / earsConfig.scale + earOffsetY) * Math.sin(translateRad);

    if (flipHorizontal) translateX = -translateX;

    applySvgTranslation(earComponent, { x: translateX, y: translateY });

    saveSnapshot('ear4');

    const midPointDeg = 270;
    let rotationDeg = earsConfig.translateDeg - midPointDeg;

    if (flipHorizontal) rotationDeg = -rotationDeg;

    applySvgRotation(earComponent, rotationDeg);

    saveSnapshot('ear5');

    return newEarSize;
}

export async function renderEars(generator, bodySize) {
    const earsConfig = generator.getEarsConfig();

    const bodyR = Math.round(bodySize.width / 2);

    // Render left ear
    await renderEar(earsConfig, bodyR, false);

    // Render right ear
    // Mirror translateDeg and rotation
    const midPointDeg = 270;
    const rightEarTranslateDeg = earsConfig.translateDeg + 2 * (midPointDeg - earsConfig.translateDeg);

    // Not really using right ear rotation. I guess it should be a "rotation offset" kinda thing?
    //const rightEarRotation = earsConfig.rotation;

    const rightEarConfig = { ...earsConfig, translateDeg: rightEarTranslateDeg };

    await renderEar(rightEarConfig, bodyR, true);
}

function saveSnapshot(caption = '') {
    const snapshotElement = document.createElement('div');
    snapshotElement.classList.add('snapshot');

    const stageSnapshotEl = stageSvgEl.cloneNode(true);

    snapshotElement.append(stageSnapshotEl, caption);

    snapshotContainerEl.prepend(snapshotElement);
}
