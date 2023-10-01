function minNumber(input) {

    let i = 0;
    let number = input[i];
    let minNumber = Number.MAX_VALUE;

    while (number !== "Stop") {

        let currNumber = Number(number);

        if (currNumber < minNumber) {
            minNumber = currNumber;
        }

        i++;
        number = input[i];
    }
    console.log(minNumber);

}

minNumber(["45", "-20", "-30", "99", "Stop"]);