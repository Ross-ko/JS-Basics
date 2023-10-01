function maxNumber(input) {

    let i = 0;
    let number = input[i];
    let biggestNum = Number.MIN_SAFE_INTEGER;

    while (number !== "Stop") {

        let currNumber = Number(number);

        if (currNumber > biggestNum) {
            biggestNum = currNumber;
        }

        i++;
        number = input[i];
    }
    console.log(biggestNum);

}

maxNumber(["-1", "-2", "Stop"]);