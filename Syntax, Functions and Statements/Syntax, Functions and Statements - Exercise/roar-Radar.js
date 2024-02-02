function roadRadar(kilometers, place) {
    let km = Number(kilometers);
    let roadPlace = place;

    let limitKm = 0;
    let statusText;
    let isInside = false;

    // check roadPlace
    if (roadPlace === 'motorway') {
        limitKm = 130;
    } else if (roadPlace === 'interstate') {
        limitKm = 90;
    } else if (roadPlace === 'city') {
        limitKm = 50;
    } else if (roadPlace === 'residential') {
        limitKm = 20;
    }

    // limitKm validation:
    if ((km - limitKm) < 20 && (km - limitKm) > 0) {
        statusText = 'speeding';
        isInside = true;
    } else if ((km - limitKm) < 40 && (km - limitKm) > 0) {
        statusText = 'excessive speeding';
        isInside = true;
    } else if ((km - limitKm) > 40 && (km - limitKm) > 0) {
        statusText = 'reckless driving';
        isInside = true;
    }

    // Output:
    if (isInside) {
        console.log(`The speed is ${km - limitKm} km/h faster than the allowed speed of ${limitKm} - ${statusText}`);
    } else {
        console.log(`Driving ${km} km/h in a ${limitKm} zone`);
    }
}

roadRadar(270, 'motorway')
