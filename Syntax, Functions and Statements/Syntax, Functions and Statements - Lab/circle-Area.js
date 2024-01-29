function circleArea(input) {
    if (typeof (input) == 'number') {
        let result = (input ** 2) * Math.PI;
        console.log(result.toFixed(2));
        return;
    }
    console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
}

circleArea(true);