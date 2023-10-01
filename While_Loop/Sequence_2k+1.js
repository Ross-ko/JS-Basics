function sequenceTwoKPlusOne(input) {

    let num = Number(input[0]);
    let multiplier = 1;

    while (multiplier <= num) {
        console.log(multiplier);
        multiplier = (multiplier * 2) + 1;
    }
}

sequenceTwoKPlusOne(["31"]);