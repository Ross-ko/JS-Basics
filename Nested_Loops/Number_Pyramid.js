function numberPyramid(input) {

    let num = Number(input[0]);
    let currNum = 1;
    let output = '';

    for (let row = 1; row <= num; row++) {
        for (let column = 1; column <= row; column++) {
            if (currNum > num) {
                console.log(output);
                return;
            }
            output += currNum + ' ';
            currNum++;
        }
        console.log(output);
        output = '';
    }
}

numberPyramid(["15"]);