function footballKit(input) {

    let shirt = Number(input[0]);
    let sumForPrice = Number(input[1]);

    let shorts = shirt * 0.75;
    let socks = shorts * 0.20;
    let footballBoots = (shirt + shorts) * 2;
    let totallSum = (shirt + shorts + socks + footballBoots) * 0.85;

    if (totallSum >= sumForPrice) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totallSum.toFixed(2)} lv.`);
    } else {
        let neededMoney = sumForPrice - totallSum;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`);
    }
}

footballKit(['25', '100'])