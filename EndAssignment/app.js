class App

{
    runApplication()
    {
        let canvas = document.getElementById('canvasId');
        let g = canvas.getContext("2d");
        document.body.style.overflow = "hidden";
        document.body.style.background = "#AAAAAA";

        canvas.height = screen.height;
        canvas.width = screen.width;

        this.DrawCircle = function(x,y,hex,pix,g) {
            g.beginPath();
            g.fillStyle = hex;
            g.strokeStyle = hex;
            g.arc(x,y,pix,0,Math.PI*2);
            g.stroke();
            g.fill();
            g.closePath();
        }

        this.DrawSquare = function(x,y,hex,xp,yp,g) {
            g.beginPath();
            g.fillStyle = hex;
            g.strokeStyle = hex;
            g.moveTo(x, y);
            g.lineTo(x + xp, y);
            g.lineTo(x + xp, y + yp);
            g.lineTo(x, y + yp);
            g.closePath();
            g.stroke();
            g.fill()
        }

        this.DrawTriangle = function(x,y,hex,xp,yp,g) {
            g.beginPath();
            g.strokeStyle = hex;
            g.fillStyle = hex;
            g.moveTo(x, y);
            g.lineTo(x + xp / 2, y - yp);
            g.lineTo(x + xp, y);
            g.closePath();
            g.stroke();
            g.fill()
        }

        //DrawCircle(X pos, Y pos, Hex, Size, g)
        //DrawSquare(X pos, Y pos, Hex, X size, Y Size, g)
        //DrawTriangle(X pos, Y pos, Hex, X size, Y Size, g)     
        
        this.DrawHouse = function(x,y,g) {
            //Wall
            this.DrawSquare(x,y,"#9f5529",50,50,g);
            //Door
            this.DrawSquare(x + 20,y + 25,"#bf774b",20,25,g);
            //Roof
            this.DrawTriangle(x - 5,y,"#FFFFFF",60,25,g);
        }

        this.DrawSnowMan = function(x,y,g) {
            //Lower
            this.DrawCircle(x,y + 15,"#FFFFFF",15,g);
            this.DrawCircle(x,y + 15,"#000000",1.5,g);
            //Middle
            this.DrawCircle(x,y,"#FFFFFF",10,g);
            this.DrawCircle(x,y,"#000000",1.5,g);
            this.DrawCircle(x,y + 7.5,"#000000",1.5,g);
            //Head
            this.DrawCircle(x,y - 10,"#FFFFFF",7.5,g);
            this.DrawCircle(x - 2,y - 10,"#000000",1.5,g);
            this.DrawCircle(x + 2,y - 10,"#000000",1.5,g);
            this.DrawTriangle(x - 1,y - 8,"#FFBBBB",1.5,-6.5,g);
            //TopHat
            this.DrawSquare(x - 6,y - 20,"#333333",12,5,g);
            this.DrawSquare(x - 6,y - 16,"#FF0000",12,0.5,g);
            this.DrawSquare(x - 7.5,y - 15,"#333333",15,2,g);
        }

        this.DrawTree1 = function(x,y,g){
            //Trunk
            this.DrawSquare(x, y + 10, "#441111",25,40,g);

            //Lower
            this.DrawTriangle(x - 25,y + 30,"#FFFFFF",75,60,g);

            //Middle
            this.DrawTriangle(x - 25,y,"#FFFFFF",75,60,g);

            //Higher
            this.DrawTriangle(x - 25,y - 30,"#FFFFFF",75,50,g);
        }

        this.DrawTree2 = function(x,y,g){
            //Trunk
            this.DrawSquare(x, y + 20, "#441111",50,80,g);

            //Lower
            this.DrawTriangle(x - 50,y + 60,"#FFFFFF",150,120,g);

            //Middle
            this.DrawTriangle(x - 50,y,"#FFFFFF",150,120,g);

            //Higher
            this.DrawTriangle(x - 50,y - 60,"#FFFFFF",150,100,g);

            //Balls
            this.DrawCircle(x,y,"#FF0000",10,g);
            this.DrawCircle(x + 50,y - 10,"#0000FF",10,g);
            this.DrawCircle(x + 4,y - 30,"#00FF00",10,g);
            this.DrawCircle(x + 42,y - 30,"#FF0000",10,g);
            this.DrawCircle(x,y - 50,"#00FFFF",10,g);
            this.DrawCircle(x + 72,y + 30,"#0000FF",10,g);
            this.DrawCircle(x + 4,y + 42,"#DDAABB",10,g);
            this.DrawCircle(x - 42,y + 72,"#AAAAAA",10,g);
            this.DrawCircle(x + 40,y + 22,"#41f2e9",10,g);
            this.DrawCircle(x + 40,y - 122,"#bf3d8d",10,g);
            this.DrawCircle(x + 10,y - 102,"#a95fde",10,g);
            this.DrawCircle(x + 20,y - 82,"#6ac4eb",10,g);
            this.DrawCircle(x + 50,y - 72,"#cefa6e",10,g);
            
            

            
        }

        this.DrawPaths = function(x,y,g) {
            this.DrawSquare(x, y + 100, "#6e5c3a",3000,50,g)
            this.DrawSquare(x + 300, y + 100, "#6e5c3a",50,400,g)
            this.DrawSquare(x + 300, y + 500, "#6e5c3a",1000,50,g)
        }

        this.DrawPaths(0,0,g);
        
        //Houses
        this.DrawHouse(200,40,g);
        this.DrawHouse(300,40,g);
        this.DrawHouse(400,40,g);
        this.DrawHouse(500,40,g);
        this.DrawHouse(600,40,g);
        this.DrawHouse(700,40,g);
        this.DrawHouse(800,40,g);
        this.DrawHouse(900,40,g);
        this.DrawHouse(1000,40,g);
        this.DrawHouse(1100,40,g);
        this.DrawHouse(1200,40,g);
        this.DrawHouse(1300,40,g);
        this.DrawHouse(1400,40,g);
        this.DrawHouse(400,430,g);
        this.DrawHouse(500,430,g);
        this.DrawHouse(600,430,g);
        this.DrawHouse(700,430,g);
        this.DrawHouse(800,430,g);
        this.DrawHouse(900,430,g);
        this.DrawHouse(1000,430,g);
        this.DrawHouse(1100,430,g);

        //Trees
        this.DrawTree1(200,400,g);
        this.DrawTree1(900,553,g);
        this.DrawTree1(600,326,g);
        this.DrawTree1(455,521,g);
        this.DrawTree1(375,643,g);
        this.DrawTree1(900,235,g);
        this.DrawTree1(1200,435,g);
        this.DrawTree1(1500,40,g);

        //Snowmen
        this.DrawSnowMan(100,40,g);
        this.DrawSnowMan(700,200,g);
        this.DrawSnowMan(20,300,g);
        this.DrawSnowMan(500,333,g);

        this.DrawTree2(750,300,g);
    }
}


let app = new App();
app.runApplication();