function cookingByNumbers(num, command1, command2, command3, command4, command5) {

    let startNumber = num;
    let commands = [command1, command2, command3, command4, command5];

    // ⦁	chop - divide the number by two
    // ⦁	dice - square root of a number
    // ⦁	spice - add 1 to the number
    // ⦁	bake - multiply number by 3
    // ⦁	fillet - subtract 20% from the number

    for (let i = 0; i < commands.length; i++) {

        switch (commands[i]) {
            case 'chop':
                console.log(startNumber /= 2);
                break;
            case 'dice':
                console.log(startNumber = Math.sqrt(startNumber));
                break;
            case 'spice':
                console.log(++startNumber);
                break;
            case 'bake':
                console.log(startNumber *= 3);
                break;
            case 'fillet':
                console.log(startNumber -= startNumber * 0.20);
                break;
        }
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');