function addItem() {
    let inputText = document.getElementById('newItemText');
    let ulElement = document.querySelector('ul');
    ulElement.appendChild(document.createElement('li')).textContent = inputText.value;
    inputText.value = '';
}
