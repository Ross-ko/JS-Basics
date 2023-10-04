function sumPrimeNonPrime(input) {

    let num = 0;
    let data = input[num];
    let primeSum = 0;
    let nonPrimeSum = 0;
    let isPrime = true;

    while (data !== "stop") {
        data = Number(input[num]);

        if (data < 0) {
            console.log("Number is negative.");
            num++;
            data = input[num];
            continue;
        }

        for (let n = 2; n < data; n++) {
            if (data % n === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primeSum += data;
        } else {
            nonPrimeSum += data;
        }

        num++;
        data = input[num];
        isPrime = true;
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["999", "666", "569", "stop"]);