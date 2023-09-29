function exam(input) {

    let students = Number(input[0])
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let sumGrade = 0;

    for (let i = 1; i <= students; i++) {
        let currGrade = Number(input[i]);
        sumGrade += currGrade;

        if (currGrade < 3) {
            group1++;
        } else if (currGrade < 4) {
            group2++;
        } else if (currGrade < 5) {
            group3++;
        } else {
            group4++;
        }
    }

    let group1Percentage = (group1 / students) * 100;
    let group2Percentage = (group2 / students) * 100;
    let group3Percentage = (group3 / students) * 100;
    let group4Percentage = (group4 / students) * 100;

    let avrGrade = sumGrade / students;

    console.log(`Top students: ${group4Percentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${group3Percentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${group2Percentage.toFixed(2)}%`);
    console.log(`Fail: ${group1Percentage.toFixed(2)}%`);
    console.log(`Average: ${avrGrade.toFixed(2)}`);
}


exam(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"]);