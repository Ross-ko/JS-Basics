function oscars(input) {

    let actor = input[0];
    let academyPoints = Number(input[1]);
    let judges = Number(input[2]);
    let totalPoints = academyPoints;

    for (let index = 3; index < input.length; index += 2) {
        totalPoints += (Number(input[index].length) * Number(input[index + 1])) / 2;
        if (totalPoints > 1250.5) {
            break;
        }
    }
    if ( totalPoints >= 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    } else {
        let neededPoints = 1250.5 - totalPoints;
        console.log(`Sorry, ${actor} you need ${neededPoints.toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);