function trainTheTrainers(input) {

    let judges = Number(input[0]);
    let data = 1;
    let subject = input[data];
    data++;
    let avrGrade = 0;
    let subjectCounter = 0;

    while (subject !== "Finish") {

        let grade = Number(input[data])
        let gradesSum = 0;

        for (let currGrade = 1; currGrade <= judges; currGrade++) {

            gradesSum += grade;
            data++;
            grade = Number(input[data]);
        }

        let curAvrGrade = gradesSum / judges;
        avrGrade += curAvrGrade;
        console.log(`${subject} - ${curAvrGrade.toFixed(2)}.`);
        subject = input[data];
        data++;
        subjectCounter++;

    }

    let GPA = avrGrade / subjectCounter;
    console.log(`Student's final assessment is ${GPA.toFixed(2)}.`);
}

trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);