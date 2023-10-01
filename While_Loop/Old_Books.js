function oldBooks(input) {

    let searchedBook = input[0];
    let i = 1;
    let currBook = input[i];
    let counter = 0;

    while (currBook !== searchedBook) {
        counter++;
        if (currBook === "No More Books") {
            console.log("The book you search is not here!");
            console.log(`You checked ${counter - 1} books.`);
            return;
        }
        i++;
        currBook = input[i];
    }
    console.log(`You checked ${counter} books and found it.`);
}

oldBooks(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"]);