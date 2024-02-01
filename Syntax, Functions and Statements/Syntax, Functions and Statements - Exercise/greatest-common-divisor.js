function commonDivisor(num1, num2) {
    let firstNumber = Number(num1);
    let secondNumber = Number(num2);

    while (firstNumber !== secondNumber) {
        if (firstNumber > secondNumber) {
            firstNumber -= secondNumber; 
        } else {
            secondNumber -= firstNumber;
        }
    }
    console.log(firstNumber);
}

commonDivisor(345, 220)




