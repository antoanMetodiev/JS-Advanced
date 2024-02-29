function toggle() {
    let buttonElement = document.querySelector('.button');
    let divElement = document.querySelector('#extra');

    if (buttonElement.textContent === 'Less') {
        buttonElement.textContent = 'More'
        divElement.style.display = 'none';
    } else {
        buttonElement.textContent = 'Less'
        divElement.style.display = 'block' 
    }
}