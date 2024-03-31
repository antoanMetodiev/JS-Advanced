function addItem() {
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');

    let optionElement = document.createElement('option');
    optionElement.textContent = textInput.value;
    optionElement.value = valueInput.value;

    let selectElement = document.getElementById('menu');
    selectElement.appendChild(optionElement);
    textInput.value = '';
    valueInput.value = '';
};