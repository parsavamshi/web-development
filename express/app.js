const express = require("express")

const app = express();
const port = 8000;

app.get("/", (req, res)=>{
    res.status(200).send("this is Homepage of  my first express app with harry")
});

app.get("/about", (req, res)=>{
    res.send("this is aboutpage of  my first express app with harry")
});
app.post("/about", (req, res)=>{
    res.send("this is a post request about page of  my first express app with harry")
});
app.post("/this", (req, res)=>{
    res.status(404).send("This is not found")
});
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})