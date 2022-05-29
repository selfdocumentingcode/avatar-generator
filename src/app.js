import { AvatarGenerator } from './avatarGenerator';
import { getHash, getInputFromUrl } from './utils';
import { avatarSize, defaultInput } from './config';
import {
    queryElements,
    btnDownloadAvatarEl,
    btnRandomInputEl,
    aDownloaderEl,
    inputTextEl,
    hashEl,
    stageSvgEl,
    canvasPreviewEl,
    snapshotContainerEl,
} from './elementContainer';
import { renderBackground, renderBody, renderEars, renderEyes, renderNosemouth } from './renderFunctions';
import { loadComponentImages } from './componentsContainer';

let hash;

function downloadAvatar() {
    const image = canvasPreviewEl.toDataURL();

    aDownloaderEl.download = 'avatar';
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

    canvasPreviewEl.width = avatarSize;
    canvasPreviewEl.height = avatarSize;

    btnDownloadAvatarEl.addEventListener('click', downloadAvatar);
    btnRandomInputEl.addEventListener('click', randomizeInput);
    inputTextEl.addEventListener('change', handleInputChange);
}

async function updatePreview() {
    const tempImage = new Image();

    const onLoadCallback = (resolve) =>
        (tempImage.onload = () => {
            const ctx = canvasPreviewEl.getContext('2d');

            ctx.drawImage(tempImage, 0, 0, avatarSize, avatarSize);

            tempImage.onload = null;

            resolve();
        });
        
    const updatePreviewPromise = new Promise((resolve) => onLoadCallback(resolve));

    const svgString = new XMLSerializer().serializeToString(stageSvgEl);

    const svg64 = window.btoa(svgString);
    const b64Start = 'data:image/svg+xml;base64,';
    const image64 = b64Start + svg64;

    tempImage.src = image64;

    return updatePreviewPromise;
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

function clearStage() {
    Array.from(stageSvgEl.children)
        .filter((c) => c.id !== 'background-layer')
        .forEach((c) => c.remove());

    Array.from(snapshotContainerEl.children)
        .forEach((c) => c.remove());
}

window.onload = app;
