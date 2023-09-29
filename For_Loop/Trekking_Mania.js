function trekkingMania(input) {
    
    let grupsCount = Number(input[0]);
    let hikers = 0;
    let musalaGroup = 0;
    let montblancGroup = 0;
    let kilimanjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;

    for (let group = 1; group < input.length; group++) {
        let currentCount = Number(input[group]);
        hikers += currentCount;

        if (currentCount < 6) {
            musalaGroup += currentCount;
        } else if (currentCount < 13) {
            montblancGroup += currentCount;
        } else if (currentCount < 26) {
            kilimanjaroGroup += currentCount;
        } else if (currentCount < 41) {
            k2Group += currentCount;
        } else {
            everestGroup += currentCount;
        }
    }

    musalaGroup = (musalaGroup / hikers) * 100;
    montblancGroup = (montblancGroup / hikers) * 100;
    kilimanjaroGroup = (kilimanjaroGroup / hikers) * 100;
    k2Group = (k2Group / hikers) * 100;
    everestGroup = (everestGroup / hikers) * 100;

    console.log(`${musalaGroup.toFixed(2)}%`);
    console.log(`${montblancGroup.toFixed(2)}%`);
    console.log(`${kilimanjaroGroup.toFixed(2)}%`);
    console.log(`${k2Group.toFixed(2)}%`);
    console.log(`${everestGroup.toFixed(2)}%`);

}

trekkingMania(["10","10","5","1","100","12","26","17","37", "40","78"]);