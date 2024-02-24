function colorize() {
    let trElements = document.getElementsByTagName('td');
    for (let i = 0; i < trElements.length; i += 4) {
        trElements[i].style.backgroundColor = 'Teal';
        trElements[i + 1].style.backgroundColor = 'Teal';
    }
}
