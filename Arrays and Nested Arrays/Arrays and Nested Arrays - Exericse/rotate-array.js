function solve(arr, n) {
    let rotations = Number(n);
    for (let i = 0; i < rotations; i++) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }
    console.log(arr.join(' '));
}

solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);