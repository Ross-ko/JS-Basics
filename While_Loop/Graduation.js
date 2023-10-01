function graduation(input) {

    let student = input[0];
    let i = 1;
    let currGrade = Number(input[i]);
    let exclCounter = 0;
    let avrGrade = 0;

    while (i !== 13) {
        if (currGrade < 4) {
            exclCounter++;
            if (exclCounter > 1) {
                console.log(`${student} has been excluded at ${i - 1} grade`);
                return;
            }
        }
        avrGrade += currGrade;
        i++;
        currGrade = Number(input[i]);
    }
    avrGrade = avrGrade / 12;
    console.log(`${student} graduated. Average grade: ${avrGrade.toFixed(2)}`);
}

graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])