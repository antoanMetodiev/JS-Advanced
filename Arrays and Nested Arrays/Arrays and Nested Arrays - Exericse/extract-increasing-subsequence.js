function solve(numbers) {
    let biggerNum = Number(numbers[0]);
    let biggerNumbers = [];
    biggerNumbers.push(biggerNum);

    for (let i = 1; i < numbers.length; i++) {
        if (Number(numbers[i]) >= biggerNum) {
            biggerNum = Number(numbers[i]);
            biggerNumbers.push(biggerNum);
        }
    }
    return biggerNumbers;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
