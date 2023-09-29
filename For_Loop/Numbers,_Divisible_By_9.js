function numbersDivisibleByNine(input) {
    
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let sum = 0;

    for(let start = firstNum; start <= secondNum; start++) {
        if(start % 9 === 0) {
            sum = sum + start;
        }
    }
    console.log(`The sum: ${sum}`);
    for(let start = firstNum; start <= secondNum; start++) {
        if(start % 9 === 0) {
            console.log(start);
        }
    }
}

numbersDivisibleByNine(["100", "200"]);