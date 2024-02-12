function solve(input) {

    let towns = {};
    for (const town of input) {

        let [key, population] = town.split(' <-> ');
        let currentPopulation = Number(population);

        if (towns[key]) {
            let previousPopulation = towns[key];
            towns[key] = previousPopulation + currentPopulation;

        } else {
            towns[key] = currentPopulation;
        }
    }
    
    Object.keys(towns).forEach(e => console.log(`${e} : ${towns[e]}`));
}

solve(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925', 'Istanbul <-> 1000']);