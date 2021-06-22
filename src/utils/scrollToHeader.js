export default function  scrollToHeader() {
    const imageHeight = document.getElementById('headerImage').clientHeight;
    window.scrollTo({
        top: imageHeight,
        behavior: 'smooth',
    });
}