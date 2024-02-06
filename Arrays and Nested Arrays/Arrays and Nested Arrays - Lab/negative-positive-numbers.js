function solve(numbers) {
    let newArray = [];
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            newArray.unshift(numbers[i]);
        } else {
            newArray.push(numbers[i])
        }
    }
    
    // Output:
    for (let i = 0; i < newArray.length; i++) {
        console.log(newArray[i]);
    }
}

solve([3, -2, 0, -1])
