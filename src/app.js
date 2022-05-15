import { AvatarGenerator } from './avatarGenerator';
import { getHash } from './utils';
import { componentFiles, componentDir, canvasSize, defaultInput, publicUrl } from './config';

let componentContainerEl;
let imgRendererEl;
let svgEditorEl;
let canvasEl;
let btnDownloadAvatarEl;
let btnRandomInputEl;
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

function generateNewHash(newValue) {
    hash = getHash(newValue);

    hashEl.value = hash;

    generateAvatar();
}

function randomizeInput() {
    const randomInput = crypto.randomUUID();

    inputTextEl.value = randomInput;

    generateNewHash(randomInput);
}

function handleInputChange(event) {
    const inputValue = event?.currentTarget?.value ?? '';

    generateNewHash(inputValue);
}

function queryElements() {
    componentContainerEl = document.querySelector('#componentContainer');
    imgRendererEl = document.querySelector('#imgRenderer');
    svgEditorEl = document.querySelector('#svgEditor');
    btnDownloadAvatarEl = document.querySelector('#btnDownloadAvatar');
    btnRandomInputEl = document.querySelector('#btnRandomInput');
    aDownloaderEl = document.querySelector('#downloader');
    imgAvatarPreviewEl = document.querySelector('#avatarPreview');
    inputTextEl = document.querySelector('#inputText');
    hashEl = document.querySelector('#hash');

    canvasEl = document.querySelector('#canvas');
}

function initializeStuff() {
    inputTextEl.value = defaultInput;
    hash = getHash(inputTextEl.value);
    hashEl.value = hash;

    canvasEl.width = canvasSize;
    canvasEl.height = canvasSize;
    canvasCtx = canvasEl.getContext('2d');

    btnDownloadAvatarEl.addEventListener('click', downloadAvatar);
    btnRandomInputEl.addEventListener('click', randomizeInput);
    inputTextEl.addEventListener('change', handleInputChange);
}

async function loadComponentImages() {
    for (let z = 0; z < Object.keys(componentFiles).length; z++) {
        var key = Object.keys(componentFiles)[z];
        var count = componentFiles[key];

        for (let i = 0; i < count; i++) {
            const imagePath = `${publicUrl}/${componentDir}/${key}_${i}.svg`;

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

    const newSize = applySvgTransforms({ color: nousemouthConfig.color, scale: nousemouthConfig.scale });

    const nousemouthX = canvasEl.width / 2 - newSize.width / 2;
    const nousemouthY = canvasEl.height / 2 - newSize.height / 2 + 8;

    await renderEditedSvgToCanvas(nousemouthX, nousemouthY);
}

async function renderEyes(generator) {
    const eyesConfig = generator.getEyesConfig();

    const translateY = -24;

    // Left eye
    initSvgEditor(`eye-${eyesConfig.variant}`);

    const newLeftEyeSize = applySvgTransforms({ color: eyesConfig.color, scale: eyesConfig.scale });

    const leftEyePositionX = canvasEl.width / 2 - newLeftEyeSize.width / 2 - eyesConfig.distance;
    const leftEyePositionY = canvasEl.height / 2 - newLeftEyeSize.height / 2 + translateY;

    await renderEditedSvgToCanvas(leftEyePositionX, leftEyePositionY);

    // Right eye
    initSvgEditor(`eye-${eyesConfig.variant}`);

    const newRightEyeSize = applySvgTransforms({ color: eyesConfig.color, scale: eyesConfig.scale });

    const rightEyePositionX = canvasEl.width / 2 - newRightEyeSize.width / 2 + eyesConfig.distance;
    const rightEyePositionY = canvasEl.height / 2 - newRightEyeSize.height / 2 + translateY;

    await renderEditedSvgToCanvas(rightEyePositionX, rightEyePositionY);
}

async function renderEars(generator) {
    const earsConfig = generator.getEarsConfig();

    const translateY = -84;

    // Left ear
    initSvgEditor(`ear-${earsConfig.variant}`);

    const newLeftEarSize = applySvgTransforms({
        color: earsConfig.color,
        scale: earsConfig.scale,
        rotation: -earsConfig.rotation,
    });

    const leftEarPositionX = canvasEl.width / 2 - newLeftEarSize.width / 2 - earsConfig.distance;
    const leftEarPositionY = canvasEl.height / 2 - newLeftEarSize.height / 2 + translateY;

    await renderEditedSvgToCanvas(leftEarPositionX, leftEarPositionY);

    // Right ear
    initSvgEditor(`ear-${earsConfig.variant}`);

    const newRightEearSize = applySvgTransforms({
        color: earsConfig.color,
        scale: earsConfig.scale,
        rotation: earsConfig.rotation,
    });

    const rightEarPositionX = canvasEl.width / 2 - newRightEearSize.width / 2 + earsConfig.distance;
    const rightEarPositionY = canvasEl.height / 2 - newRightEearSize.height / 2 + translateY;

    await renderEditedSvgToCanvas(rightEarPositionX, rightEarPositionY);
}

async function renderBody(generator) {
    const bodyConfig = generator.getBodyConfig();

    initSvgEditor('body-0');

    const newBodySize = applySvgTransforms({ color: bodyConfig.color, scale: bodyConfig.scale });

    const bodyPositionX = canvasEl.width / 2 - newBodySize.width / 2;
    const bodyPositionY = canvasEl.height / 2 - newBodySize.height / 2;

    await renderEditedSvgToCanvas(bodyPositionX, bodyPositionY);
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
    const scale = params.scale;
    const rotation = params.rotation;

    const svgEl = document.querySelector('#svg-clone');

    const fillableEl = svgEl.querySelector('[fill]');

    fillableEl.setAttributeNS(null, 'fill', color);
    fillableEl.setAttributeNS(null, 'stroke', color);

    const groupEl = svgEl.querySelector('g');

    let gTransform = groupEl.getAttributeNS(null, 'transform') ?? '';

    gTransform += ` scale(${scale})`;

    if (rotation) {
        const svgCenterX = svgEl.clientWidth / 2;
        const svgCenterY = svgEl.clientHeight / 2;

        gTransform += ` rotate(${rotation} ${svgCenterX} ${svgCenterY})`;
    }

    groupEl.setAttributeNS(null, 'transform', gTransform);

    // const groupElWidth = groupEl.getBBox().width;
    // const groupElHeight = groupEl.getBBox().height;

    // const newWidth = svgEl.clientWidth * scale;
    // const newHeight = svgEl.clientHeight * scale;

    const newWidth = svgEl.clientWidth * scale;
    const newHeight = svgEl.clientHeight * scale;

    svgEl.setAttributeNS(null, 'width', newWidth);
    svgEl.setAttributeNS(null, 'height', newHeight);

    return {
        width: newWidth,
        height: newHeight,
    };
}

function setCanvasBackground(generator) {
    const bgColor = generator.getBackgroundColor();

    canvasCtx.fillStyle = bgColor;
    canvasCtx.fillRect(0, 0, canvasEl.width, canvasEl.height);
}

async function generateAvatar() {
    const generator = new AvatarGenerator(hash);

    setCanvasBackground(generator);

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
