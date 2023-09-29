function cleverLily(input) {

    let lilysAge = Number(input[0]);
    let washingMPrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let moneySaved = 0;
    let moneyGiven = 10;

    for (let age = 1; age <= lilysAge; age++) {
        if (age % 2 === 0) {
            moneySaved = moneySaved + (moneyGiven - 1);
            moneyGiven = moneyGiven + 10;
        } else {
            moneySaved = moneySaved + toyPrice;
        }
    }
    if (moneySaved >= washingMPrice) {
        let moneyLeft = moneySaved - washingMPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let neededMoney = washingMPrice - moneySaved;
        console.log(`No! ${neededMoney.toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"]);