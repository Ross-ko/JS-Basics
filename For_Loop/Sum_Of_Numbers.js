function sumOfNumbers(input) {

    let num = input[0];
    let sum = 0;

    for(let n = 0; n < num.length; n++){
        sum = sum + Number(num[n]);
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["1234"]);