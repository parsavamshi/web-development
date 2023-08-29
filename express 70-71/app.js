const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// For serving static files
app.use('/static', express.static('static'))


// Set the template  engine as pug 
app.set('view engine', 'pug')


// Set the views directory 
app.set('views', path.join(__dirname, 'views'))

//Our pug demo endpoint
app.get("/demo", (req, res)=>{
    res.status(200).render('demo', { title: 'Hey kittu ', message: 'Hello there! and thanks for telling me how to usig pubG!' })
});

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