function solve(numbers) {
    let magicNumber = 0;
    let currentSum = 0;
    // for cols:
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i].length; j++) {
            if (i == 0) {
                magicNumber += Number(numbers[i][j]);
            }
            currentSum += Number(numbers[i][j]);
        }

        if (currentSum != magicNumber) {
            return false;
        }
        currentSum = 0;
    }

    // for rows:
    magicNumber = 0;
    for (let i = 0; i < numbers[0].length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i == 0) {
                magicNumber += Number(numbers[j][i]);
            }
            currentSum += Number(numbers[j][i]);
        }

        if (currentSum != magicNumber) {
            return false;
        }
        currentSum = 0;
    }
    return true;
}

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);