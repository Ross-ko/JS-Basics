function building(input) {

    let floors = Number(input[0]);
    let apPerFloor = Number(input[1]);

    for (let floorCounter = floors; floorCounter > 0; floorCounter--) {
        
        let buildingPlan = ''
        
        for (let apCounter = 0; apCounter < apPerFloor; apCounter++) {

            if (floorCounter === floors) {
                buildingPlan += `L${floorCounter}${apCounter} `;
            } else if (floorCounter % 2 === 0) {
                buildingPlan += `O${floorCounter}${apCounter} `;
            } else {
                buildingPlan += `A${floorCounter}${apCounter} `; 
            }
        }
        console.log(buildingPlan);
    }
}

building(["6","4"]);