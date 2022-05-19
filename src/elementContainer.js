export let stageWrapperEl;
export let stageSvgEl;
export let componentContainerEl;
export let btnDownloadAvatarEl;
export let btnRandomInputEl;
export let aDownloaderEl;
export let inputTextEl;
export let hashEl;
export let canvasPreviewEl;

export function queryElements() {
    stageWrapperEl = document.querySelector('#stageWrapper');
    stageSvgEl = document.querySelector('#stageSvg');
    componentContainerEl = document.querySelector('#componentContainer');
    btnDownloadAvatarEl = document.querySelector('#btnDownloadAvatar');
    btnRandomInputEl = document.querySelector('#btnRandomInput');
    aDownloaderEl = document.querySelector('#downloader');
    inputTextEl = document.querySelector('#inputText');
    hashEl = document.querySelector('#hash');
    canvasPreviewEl = document.querySelector('#canvasPreview');
}
