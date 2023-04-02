//-----------Enable Express --------------------------//
//-----------Enable Express --------------------------//
const express = require('express');
const app = express();
const drinks = require("./models/drinks");
const foods = require("./models/food");
app.set('view engine', 'ejs');


//----------Welcome Route ----------------------------//
//----------Welcome Route ----------------------------//
app.get("/", (req, res)=>{
    res.render("home_index")
})

//----------Drinks Route ----------------------------//
//----------Drinks Route ----------------------------//
app.get("/drinks", (req, res)=>{
    res.render("drinks_index.ejs", {drinks}) 

})

//----------Drinks ID Route --------------------------//
//----------Drinks ID Route ---------------------- ---//
app.get("/drinks/:id", (req, res)=>{
    let drink = drinks[req.params.id];
    res.render("drinks_show.ejs", {drink});
})

//----------FOOD Route --------------------------//
//----------FOOD Route ---------------------- ---//
app.get("/foods", (req, res)=>{
    res.render("food_index", {foods}) 

})
//----------FOOD ID Route ---------------------- ---//
//----------FOOD ID Route ---------------------- ---//
app.get("/foods/:id", (req, res)=>{
    let food = foods[req.params.id]
    res.render("food_show", {food})
})

//-----------Listen for Server------------------------//
//-----------Listen for Server------------------------//
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });