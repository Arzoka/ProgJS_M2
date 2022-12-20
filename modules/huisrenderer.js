class HouseRender
{
    runApplication()
    {
        console.log("hello world!");
        let canvas = document.getElementById('canvasId');
        let g = canvas.getContext("2d");
        let x = 200;
        let y = 200;
        this.DrawHouse(x,y,g);
    }

    Draw(x,y,g)
       {

        // Roof
        g.beginPath()
        g.fillStyle = "#555555";
        g.moveTo(x,y);
        g.lineTo(x - 10,y + 20);
        g.lineTo(x + 30, y + 30);
        g.lineTo(x + 40,y + 10);
        g.closePath();
        g.stroke();
        g.fill()
        
        // Side Roof
        g.beginPath()
        g.fillStyle = "#666666";
        g.moveTo(x + 40, y + 10);
        g.lineTo(x + 30, y + 30);
        g.lineTo(x + 50,y + 20);
        g.closePath();
        g.stroke();
        g.fill()

        // Wall
        g.beginPath()
        g.fillStyle = "#DDDDDD";
        g.moveTo(x - 10, y + 20);
        g.lineTo(x + -10, y + 40); 
        g.lineTo(x + 30, y + 50);
        g.lineTo(x + 30, y + 30);
        g.closePath();
        g.stroke();
        g.fill()

        // Window
        g.beginPath()
        g.fillStyle = "#7777FF";
        g.moveTo(x - 5, y + 24);
        g.lineTo(x - 5, y + 32);
        g.lineTo(x + 5, y + 34.5);
        g.lineTo(x + 5, y + 26.5);
        g.closePath();
        g.stroke();
        g.fill()
 
        // Side Wall
        g.beginPath()
        g.fillStyle = "#BBBBBB"
        g.moveTo(x + 30, y + 30);
        g.lineTo(x + 30, y + 50);
        g.lineTo(x + 50, y + 40);
        g.lineTo(x + 50, y + 20);
        g.closePath();
        g.stroke();
        g.fill()

    }
}

export let House_Render = new HouseRender();