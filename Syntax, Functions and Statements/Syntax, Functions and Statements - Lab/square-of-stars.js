function squareOfStars(n) {
    n = Number(n);
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            process.stdout.write('* ')
        }
        console.log();
    }
}

squareOfStars(5);