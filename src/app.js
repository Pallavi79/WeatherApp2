const express = require("express");
const app = express();
const path=require("path");
const hbs=require("hbs");
const port = 8000;

//STATIC PATH
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));


//TEMPLATE ENGINE
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");
app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

//ROUTING
app.get("/",(req,res)=>{
  res.render("index");
});
app.get("/weather",(req,res)=>{
  //res.send("welcome")
  res.render("weather");
});
app.get("*",(req,res)=>{
  //res.send("weather");
  res.render("404error",{
    errorMsg:"Oops page not found"
  });
});

app.listen(port,()=>{
  console.log(`listening to the port ${port}`);
});