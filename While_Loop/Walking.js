function walking(input) {

    let targetSteps = 10000;
    let steps = 0;
    let currSteps = input[steps];
    let stepsCounter = 0;
    let stepDifference = 0;

    while (currSteps !== "Going home") {
        currSteps = Number(input[steps]);
        stepsCounter += currSteps;
        steps++;
        currSteps = input[steps];
        if (stepsCounter >= targetSteps) {
            break;
        }
    }
    if (currSteps === "Going home") {
        currSteps = Number(input[++steps]);
        stepsCounter += currSteps;
    }
    if (stepsCounter >= targetSteps) {
        stepDifference = stepsCounter - targetSteps;
        console.log("Goal reached! Good job!");
        console.log(`${stepDifference} steps over the goal!`);
    } else {
        stepDifference = targetSteps - stepsCounter;
        console.log(`${stepDifference} more steps to reach goal.`);
    }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);