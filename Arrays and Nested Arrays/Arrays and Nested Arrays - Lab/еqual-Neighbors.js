function solve(elements) {
    let equalElsCount = 0;
    
    let move = 0;
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < elements[i].length; j++) {

            // for Down:
            move = i + 1;
            if (move >= 0 && move < elements.length) {
                if (elements[i][j] == elements[i + 1][j]) {
                    equalElsCount++;
                }
            }
            
            // for Right:
            move = j + 1;
            if (move >= 0 && move < elements[i].length) {
                if (elements[i][j] == elements[i][j + 1]) {
                    equalElsCount++;
                }
            }
        }
    }
    console.log(equalElsCount);
}

solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);
