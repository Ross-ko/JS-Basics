function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let sum = 0;
    let counter = 0;

    for (let firstNum = start; firstNum <= end; firstNum++) {
        for (let secondNum = start; secondNum <= end; secondNum++) {
            sum = firstNum + secondNum;
            counter++;
            if (sum === magicNum) {
                console.log(`Combination N:${counter} (${firstNum} + ${secondNum} = ${sum})`);
                return;
            }
        }
    }
    console.log(`${counter} combinations - neither equals ${magicNum}`);
}

sumOfTwoNumbers(["88", "888", "1000"]);