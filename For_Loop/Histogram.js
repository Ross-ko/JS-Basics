function histogram(input) {

    let numCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let n = 1; n <= numCount; n++) {
        let num = Number(input[n]);

        if (num < 200) {
            p1++
        } else if (num < 400) {
            p2++
        } else if (num < 600) {
            p3++
        } else if (num < 800) {
            p4++
        } else {
            p5++
        }
    }
    p1 = (p1 / numCount) * 100
    p2 = (p2 / numCount) * 100
    p3 = (p3 / numCount) * 100
    p4 = (p4 / numCount) * 100
    p5 = (p5 / numCount) * 100
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);