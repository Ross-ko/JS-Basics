function readText(input) {

let i = 0;
let word = input[i];

    while (word !== 'Stop') {
        console.log(word);
        i++;
        word = input[i];
    }
}

readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);