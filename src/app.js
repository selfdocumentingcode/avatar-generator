import { AvatarGenerator } from './avatarGenerator';
import { getHash } from './utils';
import { componentFiles, componentDir, canvasSize, defaultInput } from './config';

let componentContainerEl;
let imgRendererEl;
let svgEditorEl;
let canvasEl;
let btnDownloadAvatarEl;
let aDownloaderEl;
let imgAvatarPreviewEl;
let inputTextEl;
let hashEl;

let hash;
let canvasCtx;

const componentElements = {};

function updatePreview() {
    const image = canvasEl.toDataURL('image/png');

    imgAvatarPreviewEl.src = image;
}

function downloadAvatar() {
    const image = canvasEl.toDataURL('image/png');

    aDownloaderEl.href = image;
    aDownloaderEl.click();
    aDownloaderEl.href = null;
}

function handleInputChange(event) {
    const inputValue = event?.currentTarget?.value ?? '';

    hash = getHash(inputValue);

    hashEl.value = hash;

    generateAvatar();
}

function queryElements() {
    componentContainerEl = document.querySelector('#componentContainer');
    imgRendererEl = document.querySelector('#imgRenderer');
    svgEditorEl = document.querySelector('#svgEditor');
    btnDownloadAvatarEl = document.querySelector('#btnDownloadAvatar');
    aDownloaderEl = document.querySelector('#downloader');
    imgAvatarPreviewEl = document.querySelector('#avatarPreview');
    inputTextEl = document.querySelector('#inputText');
    hashEl = document.querySelector('#hash');

    canvasEl = document.querySelector('#canvas');
}

function initializeStuff() {
    inputTextEl.value = defaultInput;
    hash = getHash(defaultInput);
    hashEl.value = hash;

    canvasEl.width = canvasSize;
    canvasEl.height = canvasSize;
    canvasCtx = canvasEl.getContext('2d');

    btnDownloadAvatarEl.addEventListener('click', downloadAvatar);
    inputTextEl.addEventListener('change', handleInputChange);
}

async function loadComponentImages() {
    for (let z = 0; z < Object.keys(componentFiles).length; z++) {
        var key = Object.keys(componentFiles)[z];
        var count = componentFiles[key];

        for (let i = 0; i < count; i++) {
            const imagePath = `/${componentDir}/${key}_${i}.svg`;

            const res = await fetch(imagePath);
            const text = await res.text();

            const svg = new DOMParser().parseFromString(text, 'text/xml').firstChild;

            const svgId = `svg-${key}-${i}`;
            svg.id = svgId;

            componentContainerEl.appendChild(svg);

            componentElements[svgId] = svg;
        }
    }
}

async function renderNosemouth(generator) {
    const nousemouthConfig = generator.getNosemouthConfig();

    initSvgEditor(`nosemouth-${nousemouthConfig.variant}`);

    const newSize = applySvgTransforms({ color: nousemouthConfig.color, size: nousemouthConfig.size });

    const nousemouthX = canvasEl.width / 2 - newSize.width / 2;
    const nousemouthY = canvasEl.height / 2 - newSize.height / 2 + 8;

    await renderEditedSvgToCanvas(nousemouthX, nousemouthY);
}

async function renderEyes(generator) {
    const eyesConfig = generator.getEyesConfig();

    const translateY = -24;

    // Left eye
    initSvgEditor(`eye-${eyesConfig.variant}`);

    const newLeftEyeSize = applySvgTransforms({ color: eyesConfig.color, size: eyesConfig.size });

    const leftEyePositionX = canvasEl.width / 2 - newLeftEyeSize.width / 2 - eyesConfig.distance;
    const leftEyePositionY = canvasEl.height / 2 - newLeftEyeSize.height / 2 + translateY;

    await renderEditedSvgToCanvas(leftEyePositionX, leftEyePositionY);

    // Right eye
    initSvgEditor(`eye-${eyesConfig.variant}`);

    const newRightEyeSize = applySvgTransforms({ color: eyesConfig.color, size: eyesConfig.size });

    const rightEyePositionX = canvasEl.width / 2 - newRightEyeSize.width / 2 + eyesConfig.distance;
    const rightEyePositionY = canvasEl.height / 2 - newRightEyeSize.height / 2 + translateY;

    await renderEditedSvgToCanvas(rightEyePositionX, rightEyePositionY);
}

async function renderEars(generator) {
    const earsConfig = generator.getEarsConfig();

    console.log(earsConfig);

    const translateY = -92;

    // Left ear
    initSvgEditor(`ear-${earsConfig.variant}`);

    const newLeftEarSize = applySvgTransforms({
        color: earsConfig.color,
        size: earsConfig.size,
        rotation: -earsConfig.rotation,
    });

    const leftEyePositionX = canvasEl.width / 2 - newLeftEarSize.width / 2 - earsConfig.distance;
    const leftEyePositionY = canvasEl.height / 2 - newLeftEarSize.height / 2 + translateY;

    await renderEditedSvgToCanvas(leftEyePositionX, leftEyePositionY);

    // Right ear
    initSvgEditor(`ear-${earsConfig.variant}`);

    const newRightEearSize = applySvgTransforms({
        color: earsConfig.color,
        size: earsConfig.size,
        rotation: earsConfig.rotation,
    });

    const rightEyePositionX = canvasEl.width / 2 - newRightEearSize.width / 2 + earsConfig.distance;
    const rightEyePositionY = canvasEl.height / 2 - newRightEearSize.height / 2 + translateY;

    await renderEditedSvgToCanvas(rightEyePositionX, rightEyePositionY);
}

async function renderBody(generator) {
    const bodyConfig = generator.getBodyConfig();

    initSvgEditor('body-0');

    const newBodySize = applySvgTransforms({ color: bodyConfig.color, size: bodyConfig.size });

    const bodyPositionX = canvasEl.width / 2 - newBodySize.width / 2;
    const bodyPositionY = canvasEl.height / 2 - newBodySize.height / 2;

    await renderEditedSvgToCanvas(bodyPositionX, bodyPositionY, newBodySize.width, newBodySize.height);
}

async function renderSvgToImage(svgString) {
    imgRendererEl.src = null;

    var svg64 = btoa(svgString);
    var b64Start = 'data:image/svg+xml;base64,';
    var image64 = b64Start + svg64;

    const imgLoadPromise = new Promise((resolve) => (imgRendererEl.onload = resolve));

    imgRendererEl.src = image64;

    return imgLoadPromise;
}

async function renderEditedSvgToCanvas(x, y) {
    const component = svgEditorEl.children[0];

    const svgString = new XMLSerializer().serializeToString(component);

    await renderSvgToImage(svgString);

    canvasCtx.drawImage(imgRendererEl, x, y);

    updatePreview();
}

function initSvgEditor(svgId) {
    svgEditorEl.innerHTML = '';

    const component = componentElements[`svg-${svgId}`];

    const svgElement = component.cloneNode(true);
    svgElement.id = 'svg-clone';

    svgEditorEl.appendChild(svgElement);
}

function applySvgTransforms(params) {
    const color = params.color;
    const size = params.size;
    const rotation = params.rotation;

    const svgElement = document.querySelector('#svg-clone');

    const fillable = svgElement.querySelector('[fill]');

    fillable.setAttributeNS(null, 'fill', color);
    fillable.setAttributeNS(null, 'stroke', color);

    let fillableTransform = fillable.getAttributeNS(null, 'transform') ?? '';

    fillableTransform += ` scale(${size}, ${size})`;

    fillable.setAttributeNS(null, 'transform', fillableTransform);

    if (rotation) {
        let svgElementTransform = svgElement.getAttributeNS(null, 'transform') ?? '';

        svgElementTransform += `rotate(${rotation})`;

        console.log({ svgElementTransform });

        svgElement.setAttributeNS(null, 'transform', svgElementTransform);
    }

    const newWidth = svgElement.clientWidth * size;
    const newHeight = svgElement.clientHeight * size;

    svgElement.setAttributeNS(null, 'width', newWidth);
    svgElement.setAttributeNS(null, 'height', newHeight);

    return {
        width: svgElement.clientWidth,
        height: svgElement.clientHeight,
    };
}

function setCanvasBackground(bgColor) {
    canvasCtx.fillStyle = bgColor;
    canvasCtx.fillRect(0, 0, canvasEl.width, canvasEl.height);
}

async function generateAvatar() {
    const generator = new AvatarGenerator(hash);

    const bgColor = generator.getBackgroundColor();

    setCanvasBackground(bgColor);

    await renderBody(generator);

    await renderEyes(generator);

    await renderNosemouth(generator);

    await renderEars(generator);
}

async function app() {
    queryElements();

    initializeStuff();

    await loadComponentImages();

    generateAvatar();
}

window.onload = app;
