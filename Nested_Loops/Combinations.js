function combinations(input) {

    let num = Number(input[0]);
    let sum = 0;
    let combinations = 0;

    for (let x = 0; x <= num; x++) {
        for (let y = 0; y <= num; y++) {
            for (let z = 0; z <= num; z++) {
                sum = x + y + z;
                if (sum === num) {
                    combinations++;
                }                
            }
        }
    }
    console.log(combinations);
}

combinations(['25']);