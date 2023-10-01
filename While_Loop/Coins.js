function coins(input) {

    let change = Number(input[0]);
    let stotinki = Math.round(change * 100);
    let stotinkiCounter = 0;

    while (stotinki > 0) {
        if(stotinki >= 200) {
            stotinkiCounter++;
            stotinki -= 200;
        } else if (stotinki >= 100) {
            stotinkiCounter++;
            stotinki -= 100;
        } else if (stotinki >= 50) {
            stotinkiCounter++;
            stotinki -= 50;
        } else if (stotinki >= 20) {
            stotinkiCounter++;
            stotinki -= 20;
        } else if (stotinki >= 10) {
            stotinkiCounter++;
            stotinki -= 10;
        }else if (stotinki >= 5) {
            stotinkiCounter++;
            stotinki -= 5;
        }else if (stotinki >= 2) {
            stotinkiCounter++;
            stotinki -= 2;
        }else if (stotinki >= 1) {
            stotinkiCounter++;
            stotinki -= 1;
        }
    }
    console.log(stotinkiCounter);
}

coins(["1.23"]);