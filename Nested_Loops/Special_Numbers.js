function specialNumbers(input) {

    let num = Number(input[0]);
    let start = 1111;
    let end = 9999;
    let specialNumbers = '';

    for (let i = start; i <= end; i++) {

        let isSpecial = false;
        let curNum = i.toString();

        for (let x = 0; x < curNum.length; x++) {

            let digit = Number(curNum[x]);

            if (num % digit === 0) {
                isSpecial = true;
            } else {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            specialNumbers += curNum + ' ';
        }
    }
    console.log(specialNumbers);
}

specialNumbers(["16"]);