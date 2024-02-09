function solve(numbers) {
    let oddEls = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 != 0) {
            oddEls.push(Number(numbers[i]) * 2);
        }
    }
    oddEls.reverse();
    let result = '';

    oddEls.forEach(e => result += e + ' ');
    console.log(result);
}

solve([10, 15, 20, 25]);