function demo(num1, num2) {

    let first = num1;
    let second = num2;
    let sum = 0;
    let output = '';
    for (let a = first; a <= second; a++) {
        if(a % 9 === 0) {
            sum += a;
            output = output + `${a} `;
        }
        
    }
    console.log(sum);
    console.log(output);
}

demo(100, 200);
