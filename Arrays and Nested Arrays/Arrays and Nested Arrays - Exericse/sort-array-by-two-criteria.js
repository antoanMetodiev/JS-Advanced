function solve(words) {
    words.sort((e1, e2) => e1.localeCompare(e2));
    words.sort((e1, e2) => e1.length - e2.length);
    console.log(words.join('\n'));
}

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);