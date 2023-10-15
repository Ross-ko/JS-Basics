function catDiet(input) {
    
    let fats = Number(input[0]);
    let proteins = Number(input[1]);
    let carbs = Number(input[2]);
    let totalCal = Number(input[3]);
    let waterPercent = Number(input[4]);
    
    let allFats = ((totalCal * fats) / 100) / 9;
    let allProteins = ((totalCal * proteins) / 100) / 4;
    let allCarbs = ((totalCal * carbs) / 100) / 4;

    let foodWeight = allFats + allProteins + allCarbs;
    let calPerGram = totalCal / foodWeight;
    let clearCal = (calPerGram * (100 -waterPercent)) / 100;

    console.log(clearCal.toFixed(4));
}

catDiet(['60','60','60','2500','60'])