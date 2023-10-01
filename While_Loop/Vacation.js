function vacation(input) {

    let vacationPrice = Number(input[0]);
    let savedMoney = Number(input[1]);
    let spendOrSave = 2;
    let currAction = input[spendOrSave];
    let transaction = 3;
    let revenue = Number(input[transaction]);
    let spendCounter = 0;
    let daysCounter = 0;

    while (vacationPrice > savedMoney) {
        if (currAction === "spend") {
            spendCounter++;
            daysCounter++;
            savedMoney -= revenue;
        }
        if (savedMoney < 0) {
            savedMoney = 0;
        }
        if (spendCounter === 5) {
            console.log("You can't save the money.");
            console.log(`${daysCounter}`);
            return;
        }
        if (currAction === "save") {
            spendCounter = 0;
            daysCounter++;
            savedMoney += revenue;
        }
        spendOrSave += 2;
        currAction = input[spendOrSave];
        transaction += 2;
        revenue = Number(input[transaction]);
    }
    console.log(`You saved the money for ${daysCounter} days.`);
}

vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);