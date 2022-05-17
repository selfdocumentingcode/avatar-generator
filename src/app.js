import { AvatarGenerator } from './avatarGenerator';
import { getHash, getInputFromUrl } from './utils';
import { defaultInput } from './config';
import {
    queryElements,
    btnDownloadAvatarEl,
    btnRandomInputEl,
    aDownloaderEl,
    imgAvatarPreviewEl,
    inputTextEl,
    hashEl,
    stageSvgEl
} from './elementContainer';
import { clearStage, renderBackground, renderBody, renderEars, renderEyes, renderNosemouth } from './renderFunctions';
import { loadComponentImages } from './componentsContainer';

let hash;

function downloadAvatar() {
    // TODO use a canvas to conver to png
    const image = imgAvatarPreviewEl.src;

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

function initializeStuff() {
    queryElements();

    const inputValue = getInputFromUrl() ?? defaultInput;

    inputTextEl.value = inputValue;
    hash = getHash(inputTextEl.value);
    hashEl.value = hash;

    btnDownloadAvatarEl.addEventListener('click', downloadAvatar);
    btnRandomInputEl.addEventListener('click', randomizeInput);
    inputTextEl.addEventListener('change', handleInputChange);
}

async function updatePreview() {
    imgAvatarPreviewEl.src = null;

    const svgString = new XMLSerializer().serializeToString(stageSvgEl);

    const svg64 = btoa(svgString);
    const b64Start = 'data:image/svg+xml;base64,';
    const image64 = b64Start + svg64;

    const imgLoadPromise = new Promise((resolve) => (imgAvatarPreviewEl.onload = resolve));

    imgAvatarPreviewEl.src = image64;

    return imgLoadPromise;
}

async function generateAvatar() {
    clearStage();

    const generator = new AvatarGenerator(hash);

    renderBackground(generator);

    const bodySize = await renderBody(generator);

     await renderEyes(generator);

     await renderNosemouth(generator);

     await renderEars(generator, bodySize);

     updatePreview();
}

async function app() {
    initializeStuff();

    await loadComponentImages();

    generateAvatar();
}

window.onload = app;
