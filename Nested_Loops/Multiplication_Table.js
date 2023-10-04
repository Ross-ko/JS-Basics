function multiplicationTable() {

    for (let num = 1; num <= 10; num++) {
        for (let multiplier = 1; multiplier <= 10; multiplier++) {

            let result = num * multiplier;
            console.log(`${num} * ${multiplier} = ${result}`);
        }
    }
}

multiplicationTable();