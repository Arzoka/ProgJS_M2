import {Tree_Render} from "./boomrenderer.js";
import {Tree_V_Render} from "./boomrenderer.js";
import { House_Render } from "./huisrenderer.js";

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
        

        for (let i = 0; i < renders; i++) {
            let x = Math.random() * screen.width;
            let y = Math.random() * screen.height;
            let n = Math.floor(Math.random() * 3 + 1);
            if (n == 1) {
                House_Render.Draw(x,y,g);
            }
            else if(n == 2) {
                Tree_Render.Draw(x,y,g);
            }
            else if(n == 3) {
                Tree_V_Render.Draw(x,y,g);
            }

            let n1 = Math.floor(Math.random() * 5 + 1);
            let n2 = Math.floor(Math.random() * 5 + 1);
            let n3 = Math.floor(Math.random() * 5 + 1);
            let n4 = Math.floor(Math.random() * 5 + 1);
            let n5 = Math.floor(Math.random() * 5 + 1);
            let n6 = Math.floor(Math.random() * 5 + 1);
            document.body.style.background = "#"+n1+n2+n3+n4+n5+n6;
          }
        
    }

}

let app = new App();
app.runApplication();