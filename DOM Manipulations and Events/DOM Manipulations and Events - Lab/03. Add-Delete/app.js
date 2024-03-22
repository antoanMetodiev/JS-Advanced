function addItem() {
    let inputElement = document.getElementById('newItemText');
    let ulElement = document.querySelector('ul');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    let aElement = document.createElement('a');
    aElement.textContent = '[Delete]'
    aElement.href = "#";

    aElement.addEventListener('click', onClick);
        
    function onClick(event) {
        console.log(event);
    }

    liElement.appendChild(aElement);

    ulElement.appendChild(liElement);
    inputElement.value = '';
}