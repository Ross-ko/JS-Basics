function cake(input) {

    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let cakePieces = cakeWidth * cakeLength;
    let index = 2;
    let piecesTaken = input[index];

    while (piecesTaken !== "STOP") {
        piecesTaken = Number(input[index]);
        cakePieces -= piecesTaken;

        if (cakePieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
            return;
        }

        index++;
        piecesTaken = input[index];
    }   
    console.log(`${cakePieces} pieces are left.`);
}

cake(["10",

"10",

"20",

"20","20", "20", "21"]);