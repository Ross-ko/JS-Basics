function excursionSale(input) {

    let index = 0
    let seaExcursions = Number(input[index]);
    index++;
    let seaPackageCount = 0;
    let mountainExcursions = Number(input[index]);
    index++
    let mountainPackageCount = 0;
    let totalProfit = 0;
    let packageType = input[index];

    while (packageType !== "Stop") {
        let currPackage = packageType

        switch (currPackage) {
            case "sea":
                if (seaPackageCount === seaExcursions) {
                    break;
                } else {
                    seaPackageCount++;
                    totalProfit += 680;
                }
                break;
            case "mountain":
                if (mountainPackageCount === mountainExcursions) {
                    break;
                } else {
                    mountainPackageCount++;
                    totalProfit += 499;
                }
                break;
        }
        if (seaPackageCount === seaExcursions && mountainPackageCount === mountainExcursions) {
            console.log("Good job! Everything is sold.");
            break;
        }
        index++
        packageType = input[index];
    }
    console.log(`Profit: ${totalProfit} leva.`);
}

excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"]);