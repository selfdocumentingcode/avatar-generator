import { stageSvgEl } from './elementContainer';

export function applySvgFlipHorizontal(componentLayer) {
    appendTransform(componentLayer, `scale(-1,1)`);
}

export function applySvgTranslation(componentLayer, translation) {
    const { x, y } = translation;

    appendTransform(componentLayer, `translate(${x} ${y})`);
}

export function applySvgRotation(componentLayer, rotationDeg) {
    const fillableEl = componentLayer.querySelector('[fill]');

    const rect = fillableEl.getBoundingClientRect();

    const rectCenterX = rect.x + rect.width / 2;
    const rectCenterY = rect.y + rect.height / 2;

    const relativeCoords = getRelativeCoordinates(rectCenterX, rectCenterY, stageSvgEl, fillableEl);

    const positionX = relativeCoords.x;
    const positionY = relativeCoords.y;

    appendTransform(fillableEl, `rotate(${rotationDeg} ${positionX} ${positionY})`);
}

export function applySvgTransforms(componentLayer, params) {
    const { color, offsetX, offsetY, flipHorizontal } = params;
    const { scale } = params;
    // const scale = 0.5;

    const fillableEl = componentLayer.querySelector('[fill]');

    fillableEl.setAttributeNS(null, 'fill', color);
    fillableEl.setAttributeNS(null, 'stroke', color);

    componentLayer.setAttributeNS(null, 'transform-origin', 'center');

    const originalRect = componentLayer.getBoundingClientRect();

    const originalWidth = originalRect.width;
    const originalHeight = originalRect.height;

    appendTransform(componentLayer, `scale(${scale})`);

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

    // if (flipHorizontal) translateToX = -translateToX;

    appendTransform(componentLayer, `translate(${translateToX}, ${translateToY})`);

    return {
        width: scaledWidth,
        height: scaledHeight,
    };
}

export async function addLayerToStage(componentLayer, x, y) {
    const fillableEl = componentLayer.querySelector('[fill]');

    const positionalAttributes = ['cx', 'cy', 'x', 'y'];

    positionalAttributes.forEach((a) => {
        if (fillableEl.hasAttributeNS(null, a)) {
            fillableEl.removeAttributeNS(null, a);
        }
    });

    stageSvgEl.appendChild(componentLayer);
}

function getRelativeCoordinates(x, y, svgContainer, svgElement) {
    var p = svgContainer.createSVGPoint();
    p.x = x;
    p.y = y;

    var ctm = svgElement.getScreenCTM();

    return p.matrixTransform(ctm.inverse());
}

export function appendTransform(svgElement, newTransforms) {
    let currentTransform = svgElement.getAttributeNS(null, 'transform') ?? '';

    if (!Array.isArray(newTransforms)) newTransforms = [newTransforms];

    const allTransforms = [currentTransform, ...newTransforms].join(' ').trim();

    svgElement.setAttributeNS(null, 'transform', allTransforms);
}
