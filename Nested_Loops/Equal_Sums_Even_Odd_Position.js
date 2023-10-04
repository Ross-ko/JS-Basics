function equalSumsEvenOddPosition(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNumbers = '';

    for (let start = firstNum; start <= secondNum; start++) {
        let currNum = start.toString();
        let evenSum = 0;
        let oddSum = 0;

        for (let i = 0; i < currNum.length; i++) {
            let num = Number(currNum[i]);

            if ((i + 1) % 2 === 0){
                evenSum += num;
            } else {
                oddSum += num;
            }
        }
        if (evenSum === oddSum) {
            magicNumbers += currNum + ' ';
        }
    }
    console.log(magicNumbers);
}

equalSumsEvenOddPosition(["100000","100050"]);