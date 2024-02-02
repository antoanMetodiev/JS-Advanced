function sameNumbers(input) {
    let number = input.toString();
    let numToCompare = Number(number[0]);

    let isEuqal = true;
    let allSum = 0;
    for (let i = 0; i < number.length; i++) {

        allSum += Number(number[i]);
        if (Number(number[i]) !== numToCompare) {
            isEuqal = false;
        }
    }
    console.log(isEuqal);
    console.log(allSum);
}

sameNumbers(5555);