function sumTable() {
    let tdEls = document.getElementsByTagName('td');
    let totalSum = 0;

    for (let i = 1; i < tdEls.length - 2; i += 2) {
        totalSum += Number(tdEls[i].textContent);
    }
    tdEls[tdEls.length - 1].textContent = totalSum;
}