function solve() {
  let text = document.getElementById('text').value.split(' ');
  let namingConvention = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  let newWord = '';
  if (namingConvention === 'Camel Case') {

    for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < text[i].length; j++) {

        if (j == 0 && i > 0) {
          newWord += text[i][0].toUpperCase();
          continue;
        }
        newWord += text[i][j].toLowerCase();
      }
    }
    resultElement.textContent = newWord;

  } else if (namingConvention === 'Pascal Case') {

    for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < text[i].length; j++) {

        if (j == 0) {
          newWord += text[i][0].toUpperCase();
          continue;
        }
        newWord += text[i][j].toLowerCase();
      }
    }
    resultElement.textContent = newWord;

  } else {
    resultElement.textContent = 'Error!';
  }
}