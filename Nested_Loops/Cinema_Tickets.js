function cinemaTickets(input) {

    let data = 0;
    let title = input[data];
    data++;
    let studentCounter = 0;
    let standartCounter = 0;
    let kidCounter = 0;

    while (title !== "Finish") {
        let movie = title;
        let freeSeats = Number(input[data]);
        data++;

        let ticketType = input[data];
        data++;

        let ticketCounter = 0;

        while (ticketType !== "End") {
            let ticket = ticketType;
            ticketCounter++;

            switch (ticket) {
                case "student":
                    studentCounter++;
                    break;
                case "standard":
                    standartCounter++;
                    break;
                case "kid":
                    kidCounter++;
                    break;
            }

            if (ticketCounter === freeSeats) {
                break;
            }
            
            ticketType = input[data];
            data++;

        }
        let percentage = (ticketCounter / freeSeats) * 100;
        console.log(`${movie} - ${percentage.toFixed(2)}% full.`);

        title = input[data];
        data++;

    }
    let allTickets = studentCounter + standartCounter + kidCounter;
    console.log(`Total tickets: ${allTickets}`);

    let studentsPercent = (studentCounter / allTickets) * 100;
    let standardPercent = (standartCounter / allTickets) * 100;
    let kidsPercent = (kidCounter / allTickets) * 100;

    console.log(`${studentsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);