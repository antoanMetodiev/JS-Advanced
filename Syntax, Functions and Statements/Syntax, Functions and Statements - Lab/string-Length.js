function calculateTextsLength(arr1, arr2, arr3) {
    firstArgLength = arr1.length;

    secondArgLength = arr2.length;

    thirdArgLength = arr3.length;
    result = firstArgLength + secondArgLength + thirdArgLength;
    console.log(result);
    console.log(Math.floor(result / 3));
}

calculateTextsLength('pasta', '5', '22.3');