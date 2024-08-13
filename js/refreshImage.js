export function refreshImage() {
    const image = document.getElementById('random-image');
    const newSrc = `https://picsum.photos/300/300?${new Date().getTime()}`;
    image.src = newSrc;
}
