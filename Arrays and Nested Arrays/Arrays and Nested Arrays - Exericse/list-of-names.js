function solve(names) {
    names.sort((e1, e2) => e1.localeCompare(e2));
    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);