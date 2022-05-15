import { AvatarGenerator } from './avatarGenerator';
import { getHash, getInputFromUrl } from './utils';
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
    const inputValue = getInputFromUrl() ?? defaultInput;

    inputTextEl.value = inputValue;
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

async function renderNosemouth(generator) {
    const nosemouthOffsetY = 8;

    const nousemouthConfig = generator.getNosemouthConfig();

    initSvgEditor(`nosemouth-${nousemouthConfig.variant}`);

    const newSize = applySvgTransforms({ color: nousemouthConfig.color, scale: nousemouthConfig.scale });

    const nousemouthX = canvasEl.width / 2 - newSize.width / 2;
    const nousemouthY = canvasEl.height / 2 - newSize.height / 2 + nosemouthOffsetY;

    await renderEditedSvgToCanvas(nousemouthX, nousemouthY);
}

async function renderEye(eyesConfig) {
    const eyeOffsetY = -24;

    initSvgEditor(`eye-${eyesConfig.variant}`);

    const newEyeSize = applySvgTransforms({ color: eyesConfig.color, scale: eyesConfig.scale });

    const eyePositionX = canvasEl.width / 2 - newEyeSize.width / 2 - eyesConfig.distance;
    const eyePositionY = canvasEl.height / 2 - newEyeSize.height / 2 + eyeOffsetY;

    await renderEditedSvgToCanvas(eyePositionX, eyePositionY);
}

async function renderEyes(generator) {
    const eyesConfig = generator.getEyesConfig();

    // Left eye
    await renderEye(eyesConfig);

    // Right eye
    const rightEyeConfig = { ...eyesConfig, distance: -eyesConfig.distance };
    await renderEye(rightEyeConfig);
}

async function renderEar(earsConfig, bodyR) {
    initSvgEditor(`ear-${earsConfig.variant}`);

    const midPointDeg = 270;
    const rotation = earsConfig.translateDeg - midPointDeg;

    const newEarSize = applySvgTransforms({
        color: earsConfig.color,
        scale: earsConfig.scale,
        rotation: rotation,
    });

    const positionX = canvasEl.width / 2 - newEarSize.width / 2;
    const positionY = canvasEl.height / 2 - newEarSize.height / 2;

    const translateDeg = earsConfig.translateDeg;
    const translateRad = (Math.PI / 180) * translateDeg;

    const translateX = (bodyR + newEarSize.width / 2) * Math.cos(translateRad);
    const translateY = (bodyR + newEarSize.height / 2) * Math.sin(translateRad);

    const newPositionX = positionX + translateX;
    const newPositionY = positionY + translateY;

    await renderEditedSvgToCanvas(newPositionX, newPositionY);
}

async function renderEars(generator, bodySize) {
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

async function renderBody(generator) {
    const bodyConfig = generator.getBodyConfig();

    initSvgEditor('body-0');

    const newBodySize = applySvgTransforms({ color: bodyConfig.color, scale: bodyConfig.scale });

    const bodyPositionX = canvasEl.width / 2 - newBodySize.width / 2;
    const bodyPositionY = canvasEl.height / 2 - newBodySize.height / 2;

    await renderEditedSvgToCanvas(bodyPositionX, bodyPositionY);

    return newBodySize;
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

    const bodySize = await renderBody(generator);

    await renderEyes(generator);

    await renderNosemouth(generator);

    await renderEars(generator, bodySize);
}

async function app() {
    queryElements();

    initializeStuff();

    await loadComponentImages();

    generateAvatar();
}

window.onload = app;
