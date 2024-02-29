function subtract() {
    let inputElements = document.getElementsByTagName('input');
    let resultDivElement = document.getElementById('result');
    resultDivElement.textContent = Number(inputElements[0].value) - Number(inputElements[1].value);
}