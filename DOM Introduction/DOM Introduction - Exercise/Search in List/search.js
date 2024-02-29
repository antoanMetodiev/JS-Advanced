function search() {
   let listItems = document.getElementsByTagName('li');
   let userText = document.getElementById('searchText').value;
   let matchesCounter = 0;

   for (let town of listItems) {
      if (town.textContent.includes(userText)) {
         town.style.fondWeight = 'bold';
         town.style.textDecoration = 'underline';
         matchesCounter++;
      } else {
         town.style.fondWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   let output = document.querySelector('#result');
   output.textContent = `${matchesCounter} matches found`;
}
