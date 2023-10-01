function moving(input) {

    let freeSpaceWidth = Number(input[0]);
    let freeSpaceLength = Number(input[1]);
    let freeSpaceHight = Number(input[2]);
    let freeSpace = freeSpaceWidth * freeSpaceLength * freeSpaceHight;
    let index = 3;
    let boxes = input[index];

    while (boxes !== "Done") {
        boxes = Number(input[index])
        freeSpace -= boxes;

        if (freeSpace < 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            return;
        }
        
        index++;
        boxes = input[index];
    }
    console.log(`${freeSpace} Cubic meters left.`);
}

moving(["10",

"1",

"2",

"4",

"6",

"Done"]);