export default function  copyToClipboard(text){

    let inputTest = document.createElement("input");
    inputTest.value = text;
    document.body.appendChild(inputTest);
    inputTest.select();
    document.execCommand('copy');
    document.body.removeChild(inputTest);
    alert("Copied ☺️")
}