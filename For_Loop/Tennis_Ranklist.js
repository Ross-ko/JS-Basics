function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let averagePoints = 0;
    let finalPoints = 0;
    let winsCount = 0;
    let winPercentage = 0;

    for (let check = 2; check < input.length; check++) {
        let result = input[check];

        switch (result) {
            case 'W':
                finalPoints += 2000;
                winsCount++;
                break;
            case 'F':
                finalPoints += 1200;
                break;
            case 'SF':
                finalPoints += 720;
                break;
        }
    }
    averagePoints = finalPoints / tournaments;
    winPercentage = (winsCount / tournaments) * 100;
    finalPoints += startingPoints;

    console.log(`Final points: ${Math.floor(finalPoints)}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winPercentage.toFixed(2)}%`);

}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);