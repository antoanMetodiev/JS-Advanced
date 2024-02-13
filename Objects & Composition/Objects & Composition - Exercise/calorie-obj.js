function solve(input) {

    let products = {};

    for (let i = 0; i < input.length; i += 2) {

        let productName = input[i];
        let calories = Number(input[i + 1]);

        products[productName] = calories;
    }
    console.log(products);
}

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);