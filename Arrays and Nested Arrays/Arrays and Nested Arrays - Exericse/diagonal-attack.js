function solve(arg) {
    let numbers = [];
    for (let i = 0; i < arg.length; i++) {
        numbers.push([]);
        let els = arg[i].split(' ');
        for (let j = 0; j < els.length; j++) {
            let el = Number(els[j]);
            numbers[i].push(el);
        }
    }

    // find first Diagonal:
    let firstDiagSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        firstDiagSum += Number(numbers[i][i]);
    }

    // find Second Diagonal:
    let secondDiagSum = 0;
    for (let j = numbers.length - 1; j >= 0; j--) {
        secondDiagSum += Number(numbers[numbers.length - j - 1][j]);
    }

    if (firstDiagSum != secondDiagSum) {
        return numbers.join('\n');
    }
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i].length; j++) {
            if (i !== j && j != (numbers.length - 1 - i)) {
                numbers[i].splice(j, 1, secondDiagSum);
            }
        }
    }
    numbers.forEach(e => console.log(e.join(' ')));
}

console.log(solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']));
