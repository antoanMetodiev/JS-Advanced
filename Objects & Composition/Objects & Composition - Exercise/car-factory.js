function solve(requirementCar) {
    let car = {
        model: requirementCar.model,
        engine: {},
        carriage: {},
        wheels: [],
    }

    // Put The Engine:
    if (requirementCar.power <= 90) {
        car.engine.power = 90;
        car.engine.volume = 1800;
    } else if (requirementCar.power > 90 && requirementCar.power <= 120) {

        car.engine.power = 120;
        car.engine.volume = 2400;
    } else if (requirementCar.power > 120 && requirementCar.power <= 200) {
        
        car.engine.power = 200;
        car.engine.volume = 3500;
    }
    // Set Car color:
    car.carriage.type = requirementCar.carriage;
    car.carriage.color = requirementCar.color;

    // Set Wheels:
    if (requirementCar.wheelsize % 2 == 0) {
        let decreasedWheelsSize = requirementCar.wheelsize - 1;
        requirementCar.wheelsize = decreasedWheelsSize;
    }

    // Push Wheels:
    car.wheels.push(requirementCar.wheelsize);
    car.wheels.push(requirementCar.wheelsize);
    car.wheels.push(requirementCar.wheelsize);
    car.wheels.push(requirementCar.wheelsize);
    return car;
}

console.log(solve({ model: 'Opel Vectra',
power: 150,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));
