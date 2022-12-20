class App
{
    runApplication()
    {
        console.log("hello world!");
        document.getElementById('buttonId').addEventListener('click',()=>{
            console.log('hello world!');
            const para = document.createElement("p");
            const node = document.createTextNode("This is new.");
            para.appendChild(node);
            const body = document.body;
            body.appendChild(para);
        });
    }
}
let app = new App();
app.runApplication();