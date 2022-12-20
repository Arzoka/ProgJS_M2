class App
{
    runApplication()
    {
        let arr = ["MindaRyn","imase","JVKE","Juno Lev","iamnotshane"];
        console.log(arr);
        let headers = document.getElementsByTagName("h1");
        for (let i = 0; i < headers.length; i++) {
            headers[i].innerHTML = arr[i];
        }
    }
}
let app = new App();
app.runApplication();