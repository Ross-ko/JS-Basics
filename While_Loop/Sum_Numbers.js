function sumNumbers(input) {

    let num = Number(input[0]);
    let sum = 0;
    let i = 1;
    let currNum = Number(input[i]);

    while (sum < num) {
        sum += currNum;
        i++
        currNum = Number(input[i]);
    }

    console.log(sum);
}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);