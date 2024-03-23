function create(sections) {
   let parentElement = document.getElementById('content');
   sections.forEach(sectionText => {
      let div = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = sectionText;

      pElement.style.display = 'none';
      div.appendChild(pElement);
      div.addEventListener('click', (event) => {
         event.target.querySelector('p').style.display = 'block'
      });
      parentElement.appendChild(div);
   });
}
