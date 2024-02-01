function fruit(fruit, weight, price) {
    let fruitType = fruit;
    let fruitWeight = Number(weight) / 1000;
    let pricePerKg = Number(price) * fruitWeight;
    console.log(`I need $${pricePerKg.toFixed(2)} to buy ${fruitWeight.toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80);