function evenPowersOfTwo(input) {
    
    let num = Number(input[0]);
    let numTwo = 1
    for (let n = 0; n <= num; n += 2) {
        console.log(numTwo);
        numTwo = numTwo * 2 * 2;
    }
}

evenPowersOfTwo(["3"]);