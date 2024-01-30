function calculateTextsLength(arr1, arr2, arr3) {
    let firstArgLength = arr1.length;
    let secondArgLength = arr2.length;
    let thirdArgLength = arr3.length;

    let result = firstArgLength + secondArgLength + thirdArgLength;
    console.log(result);
    console.log(Math.floor(result / 3));
}

calculateTextsLength('pasta', '5', '22.3');
