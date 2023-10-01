function examPreparation(input) {

    let maxBadGrades = Number(input[0]);
    let subject = 1;
    let grade = 2;
    let currSubject = input[subject];
    let currGrade = Number(input[grade]);
    let badGradesCounter = 0;
    let avrGrade = 0;
    let subjectsCounter = 0;

    while (currSubject !== "Enough") {
        if (currGrade <= 4) {
            badGradesCounter++;
        }
        if (badGradesCounter === maxBadGrades) {
            console.log(`You need a break, ${badGradesCounter} poor grades.`);
            return;
        }
        avrGrade += currGrade;
        subjectsCounter++;
        subject += 2;
        currSubject = input[subject];
        grade += 2;
        currGrade = Number(input[grade]);
    }
    if (currSubject === "Enough") {
        currSubject = input[subject - 2];
    }
    avrGrade = avrGrade / subjectsCounter;
    console.log(`Average score: ${avrGrade.toFixed(2)}`);
    console.log(`Number of problems: ${subjectsCounter}`);
    console.log(`Last problem: ${currSubject}`);

}

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);