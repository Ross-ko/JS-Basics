function accountBalance(input) {
    let i = 0
    let payment = input[i];
    let bankAccount = 0; 

    while (payment !== "NoMoreMoney") {
        let currPayment = Number(payment);

        if (currPayment < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            console.log(`Increase: ${currPayment.toFixed(2)}`);
            bankAccount += currPayment;
            i++;
            payment = input[i];
        }
    }
    console.log(`Total: ${bankAccount.toFixed(2)}`);
}

accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);