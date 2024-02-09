function solve(numbers) {
    let leftDiagSum = 0;
    for (let i = 0; i < numbers.length; i++) {
         leftDiagSum += Number(numbers[i][i]);
    }

    let rightDiagSum = 0;
    for (let j = 0; j < numbers.length; j++) {
        rightDiagSum += Number(numbers[numbers.length - 1 - j][j]);
    }
    console.log(leftDiagSum + ' ' + rightDiagSum);
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);
