class App
{
    runApplication()
    {
        console.log("hello world!");
        this.yellMario = function() {
            console.log("MARIO!!");
        }
        this.returnlaugh = function() {
            let toreturn = "BWAHAHA!!";
            return toreturn;
        }
        this.add2numbers = function(n1,n2) {
            let ans = n1 + n2;
            return ans;
        }
        this.vaporeon = function() {
            let script = "did you know?";
            return script;
        }
    }
}

let app = new App();
app.runApplication();
app.yellMario();
console.log(app.returnlaugh());
console.log(app.add2numbers(5,7));
console.log(app.vaporeon());