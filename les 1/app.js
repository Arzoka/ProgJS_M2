class App
{
    runApplication()
    {
        console.log("hello world!");

        let appNaam = "programming";
        let versienummer = "1.8";
        let versiedatum = "12/20/2022";
        let autheur = "Yoshi Lockx";
        let copyright = "Programming inc.";
        let distributeur = "me";
        let darkmode = false;

        console.log(appNaam);
        console.log(versienummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}
let app = new App();
app.runApplication();