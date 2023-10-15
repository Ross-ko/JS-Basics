function substitute(input) {

    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let subCounter = 0;

    for (let i = k; i <= 8; i++) {
        for (let y = 9; y >= l; y--) {
            for (let x = m; x <= 8; x++) {
                for (let z = 9; z >= n; z--) {
                    if (i % 2 === 0 && x % 2 === 0) {
                        if (y % 2 !== 0 && z % 2 !== 0) {
                            if (i === x && y === z) {
                                console.log("Cannot change the same player.");
                            } else {
                                console.log(`${i}${y} - ${x}${z}`);
                                subCounter++;
                                if (subCounter === 6) {
                                     return;
                               }
                            }
                        }
                    }
                }
            }
        }
    }
}

substitute(["1",
"1",
"1",
"1"])