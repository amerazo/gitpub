//-----------Enable Express --------------------------//
//-----------Enable Express --------------------------//
const express = require('express');
const app = express();
const drinks = require("./models/drinks");
const foods = require("./models/food");
app.set('view engine', 'ejs');


//----------Welcome Route ----------------------------//
//----------Welcome Route ----------------------------//
app.get('/', (req, res) => {
    res.render('Welcome to the Gitpub App');
});

//----------Drinks Route ----------------------------//
//----------Drinks Route ----------------------------//
app.get("/drinks", (req, res)=>{
    res.render("drinks_index.ejs", {drinks}) 

})

//-----------Listen for Server------------------------//
//-----------Listen for Server------------------------//
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });