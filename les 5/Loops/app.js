class App

{
    runApplication()
    {
        document.body.style.overflow = "hidden";
        let canvas = document.getElementById('canvasId');
        let renders = 30;
        let g = canvas.getContext("2d");

        canvas.height = screen.height;
        canvas.width = screen.width;

        this.DrawCircle = function(x,y,g) {
            g.beginPath();
            g.fillStyle = "red";
            g.arc(x,y,50,0,Math.PI*2);
            g.stroke();
            g.fill();
            g.closePath();
        }

        for (let i = 0; i < renders; i++) {
            let x = Math.random() * screen.width;
            let y = Math.random() * screen.height;
            app.DrawCircle(x,y,g);
        }
    }
}


let app = new App();
app.runApplication();