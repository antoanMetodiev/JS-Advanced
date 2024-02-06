function solve(n, k) {
    let numbers = [1];
    let repeated = Number(k);

    n = Number(n);
    while (numbers.length < n) {

        let addedNumber = 0;
        for (let i = numbers.length - 1; i >= 0; i--) {

            repeated--;
            if (repeated == 0) {
               addedNumber += Number(numbers[i]);
               break;
            }
            addedNumber += Number(numbers[i]);
        }
        // return begin value:
        repeated = Number(k);

        numbers[numbers.length] = addedNumber;
    }
    
    // Output:
    let result = '[';
    for (let i = 0; i < numbers.length; i++) {

        if (i == numbers.length - 1) {
            result += numbers[i] + ']';
            break;
        }
        result += numbers[i] + ', ';
    }
    console.log(result);
}

solve(8, 2);
