function extract(content) {
    let textElement = document.getElementById('content').textContent;
    let words = [];
    
    for (let i = 0; i < textElement.length; i++) {
        if (textElement[i] == '(') {

            let word = '';
            for (let j = i + 1; j < textElement.length; j++) {
                if (textElement[j] == ')') {
                    break;
                }
                word += textElement[j]
            }
            words.push(word);
        }
    }
    console.log(words);
}
