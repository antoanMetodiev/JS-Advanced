function deleteByEmail() {
    let tdElements = [...document.querySelectorAll('td')];
    let inputText = document.querySelector('input[name="email"]');
    let divResult = document.querySelector('div');

    for (const td of tdElements) {
        if (td.textContent === inputText.value) {
            td.parentElement.remove();
            divResult.textContent = 'Deleted';
        }
    }
    inputText.value = '';
}