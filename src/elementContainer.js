export let stageWrapperEl;
export let stageSvgEl;
export let componentContainerEl;
export let btnDownloadAvatarEl;
export let btnRandomInputEl;
export let aDownloaderEl;
export let imgAvatarPreviewEl;
export let inputTextEl;
export let hashEl;

export function queryElements() {
    stageWrapperEl = document.querySelector('#stageWrapper');
    stageSvgEl = document.querySelector('#stageSvg');
    componentContainerEl = document.querySelector('#componentContainer');
    btnDownloadAvatarEl = document.querySelector('#btnDownloadAvatar');
    btnRandomInputEl = document.querySelector('#btnRandomInput');
    aDownloaderEl = document.querySelector('#downloader');
    imgAvatarPreviewEl = document.querySelector('#avatarPreview');
    inputTextEl = document.querySelector('#inputText');
    hashEl = document.querySelector('#hash');
}