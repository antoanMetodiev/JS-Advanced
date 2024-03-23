function focused() {
    let inputElements = Array.from(document.getElementsByTagName('input'));
    inputElements.forEach(e => e.addEventListener('focus', (event) => {
        event.target.parentElement.className = 'focused';
    }));
    inputElements.forEach(e => e.addEventListener('blur', (event) => {
        event.target.parentElement.className = '';
    }));
}