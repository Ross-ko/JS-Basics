function characterSequence(input) {

    let word = input[0];

    for (let index = 0; index < word.length; index++) {
        let char = word[index];
        console.log(char);
    }
}

characterSequence(["softuni"]);