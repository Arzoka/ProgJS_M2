class App
{
    runApplication()
    {
        console. log ("hello world!");
        //code gaat hier!

        let trex = new Dino("Trex",true,10);
        console.log(trex);

        let brachiosaurus = new Dino("Brachiosaurus",false,10);
        console.log(brachiosaurus);

        let velociraptor = new Dino("Velociraptor",true,10);
        console.log(velociraptor);

        let weed = new Plant("Weed");
        console.log(weed);

        brachiosaurus.eetPlant(weed);
        velociraptor.eetDino(brachiosaurus);

    }
}

class Dino
{
    constructor(naam,vleeseter,leeftijd) {
        this.naam = naam;
        this.leeft = true;
        this.honger = true;

        this.eetDino = function(dino) {
            dino.leeft = false;
            console.log(this.naam + " eet de dino " + dino.naam);
        }

        this.eetPlant = function(plant) {
            console.log(this.naam + " eet de plant " + plant.naam);
        }
    }
}

class Plant
{
    constructor(naam) {
        this.naam = naam;
    }
}

let app = new App();
app.runApplication();