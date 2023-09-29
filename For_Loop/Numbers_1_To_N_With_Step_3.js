function numbersOneToNWithStepThree(input) {
    
    let num = Number(input[0]);

    for (let n = 1; n <= num; n +=3) {
        console.log(n);
    }
}

numbersOneToNWithStepThree(["10"]);