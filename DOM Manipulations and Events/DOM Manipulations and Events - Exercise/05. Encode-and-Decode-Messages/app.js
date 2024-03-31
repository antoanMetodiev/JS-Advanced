function encodeAndDecodeMessages() {
    let initialText = '';
    let sendText = '';

    let codeTextArea = document.getElementsByTagName('textarea')[0];
    let decodeTextArea = document.getElementsByTagName('textarea')[1];
    codeTextArea.value = '';
    
    document.getElementsByTagName('button')[0].addEventListener('click', (event) => {
        initialText = codeTextArea.value;
        decodeTextArea.value = '';

        for (let letter of codeTextArea.value) {
            let num = letter.charCodeAt(0) + 1;
            sendText += String.fromCharCode(num);
        }
        decodeTextArea.value = sendText;
        sendText = '';
        codeTextArea.value = '';
    });

    document.getElementsByTagName('button')[1].addEventListener('click', (event) => {
        decodeTextArea.value = initialText;
        initialText = '';
    });
}
