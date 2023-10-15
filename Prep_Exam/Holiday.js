function holiday(input) {
    
    let days = Number(input[0]);
    let nights = days - 1;
    let accommodationType = input[1];
    let evaluation = input[2];
    let totallSum = 0;

    switch (accommodationType) {
        case 'room for one person':
            totallSum = 18 * nights;
            break;

        case 'apartment':
            if (days < 10) {
                totallSum = (25 * nights) * 0.70;
            } else if (days <= 15) {
                totallSum = (25 * nights) * 0.65;
            } else {
                totallSum = (25 * nights) * 0.50;
            }
            break;

        case 'president apartment':
            if (days < 10) {
                totallSum = (35 * nights) * 0.90;
            } else if (days <= 15) {
                totallSum = (35 * nights) * 0.85;
            } else {
                totallSum = (35 * nights) * 0.80;
            }
            break;
    }

    if (evaluation === 'positive') {
        totallSum += totallSum * 0.25;
    } else {
        totallSum -= totallSum * 0.10
    }

    console.log(totallSum.toFixed(2));
}

holiday(['12', 'room for one', 'negative']);