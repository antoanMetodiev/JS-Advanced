function sumFirstAndLast(arr) {
    let firstNumber = Number(arr.shift());
    let lastNumber = Number(arr.pop());
    console.log(firstNumber +lastNumber);
}

sumFirstAndLast(['5', '10']);
