function reportSystem(input) {

    let expectedDonation = Number(input[0]);
    let index = 1;

    let subjectPrice = input[index];
    let cashPayment = 0;
    let cardPayment = 0;
    let cashPaymentCounter = 0;
    let cardPaymentCounter = 0;

    while (subjectPrice !== 'End') {
        let cashPrice = Number(input[index]);
        index++;
        let cardPrice = Number(input[index]);
        index++;

        if (cashPrice > 100) {
            console.log('Error in transaction!');
        } else {
            console.log('Product sold!');
            cashPayment += cashPrice;
            cashPaymentCounter++;
        }

        if (cardPrice < 10) {
            console.log('Error in transaction!');
        } else {
            console.log('Product sold!');
            cardPayment += cardPrice;
            cardPaymentCounter++;
        }

        if (expectedDonation <= (cardPayment + cashPayment)) {
            break;
        }

        subjectPrice = input[index];
    }

    if (subjectPrice === 'End' && (cardPayment + cashPayment) < expectedDonation) {
        console.log('Failed to collect required money for charity.');
    } else {
        console.log(`Average CS: ${(cashPayment / cashPaymentCounter).toFixed(2)}`);
        console.log(`Average CC: ${(cardPayment / cardPaymentCounter).toFixed(2)}`);
    }



 
}
reportSystem(['500',
'120',
'8',
'63',
'256',
'78',
'317'])