function traveling(input) {

    let index = 0;
    let destination = input[index];
    index++;
    let neededMoney = Number(input[index]);
    index++;
    let moneySaved = Number(input[index]);
    let budget = 0;

    while (destination !== "End") {
        while (budget < neededMoney) {

            budget += moneySaved;
            index++;
            moneySaved = Number(input[index]);
        }
        console.log(`Going to ${destination}!`);
        destination = input[index];
        index++;
        neededMoney = Number(input[index]);
        index++;
        moneySaved = Number(input[index])
        budget = 0;

        if (destination === "End") {
            break;
        }
    }
}

traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);