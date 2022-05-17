import { componentFiles, componentDir, publicUrl } from './config';
import { componentContainerEl } from './elementContainer';

export const componentElements = {};

export async function loadComponentImages() {
    for (let i = 0; i < Object.keys(componentFiles).length; i++) {
        var key = Object.keys(componentFiles)[i];
        var count = componentFiles[key];

        for (let j = 0; j < count; j++) {
            const imagePath = `${publicUrl}/${componentDir}/${key}_${j}.svg`;

            const res = await fetch(imagePath);
            const text = await res.text();

            const svg = new DOMParser().parseFromString(text, 'text/xml').firstChild;

            const svgId = `svg-${key}-${j}`;
            svg.id = svgId;

            componentContainerEl.appendChild(svg);

            componentElements[svgId] = svg;
        }
    }
}

export function getComponentLayer(name, variant) {
    const component = componentElements[`svg-${name}-${variant}`];

    if (!component) throw `Can't find component with name svg-${name}-${variant}`;

    const layer = component.querySelector('g');
    const layerClone = layer.cloneNode(true);

    layerClone.id = `${name}-layer`;

    return layerClone;
}
