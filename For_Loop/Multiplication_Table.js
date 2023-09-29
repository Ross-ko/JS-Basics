function multiplicationTable(input) {

    let multiplier = Number(input[0]);
    let result = 0;

    for(num = 1; num <= 10; num++) {
        result = num * multiplier;
        console.log(`${num} * ${multiplier} = ${result}`);
    }
}

multiplicationTable(['5']);