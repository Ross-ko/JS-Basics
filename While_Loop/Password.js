function password(input) {

    let user = input[0];
    let pass = input[1];
    let userInput = input[2];
    let i = 3;

    while (userInput !== pass) {
        userInput = input[i];
        i++;
    }

    console.log(`Welcome ${user}!`);
}

password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])