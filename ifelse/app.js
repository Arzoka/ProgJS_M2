class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
        this.Draw(g);
    }

    Draw(g)
       {

        let randomNumber = Math.floor(Math.random() * 2 + 1)

        // Roof
        g.beginPath()
        g.fillStyle = "#555555";
        g.moveTo(100,100);
        g.lineTo(90,120);
        g.lineTo(130, 130);
        g.lineTo(140,110);
        g.closePath();
        g.stroke();
        g.fill()
        
        // Side Roof
        g.beginPath()
        g.fillStyle = "#666666";
        g.moveTo(140, 110);
        g.lineTo(130, 130);
        g.lineTo(150,120);
        g.closePath();
        g.stroke();
        g.fill()

        // Wall
        g.beginPath()
        g.fillStyle = "#DDDDDD";
        g.moveTo(90, 120);
        g.lineTo(90, 140); 
        g.lineTo(130, 150);
        g.lineTo(130, 130);
        g.closePath();
        g.stroke();
        g.fill()

        // Window
        g.beginPath()
        if (randomNumber == 2){
            g.fillStyle = "#222222";
        }
        else{
            g.fillStyle = "#FFFF00";
        }
        
        g.moveTo(95, 124);
        g.lineTo(95, 132);
        g.lineTo(105, 134.5);
        g.lineTo(105, 126.5);
        g.closePath();
        g.stroke();
        g.fill()
 
        // Side Wall
        g.beginPath()
        g.fillStyle = "#BBBBBB"
        g.moveTo(130, 130);
        g.lineTo(130, 150);
        g.lineTo(150, 140);
        g.lineTo(150, 120);
        g.closePath();
        g.stroke();
        g.fill()

    }
}

let app = new App();
app.runApplication();