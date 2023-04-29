/****************IMPORTING PACKAGE*******************************/
const mongoose = require("mongoose");


/*******************MAKING CONNECTION***************************/

//mongoose.connect("mongodb://localhost/CSV");  //mongodb://localhost/CSV
mongoose.connect("mongodb+srv://ashishsatpute6747:SqJvux9WL7miBB3E@cluster0.3wtir4m.mongodb.net/csvstorage?retryWrites=true&w=majority"); 

//setting it to db
const db = mongoose.connection;

/****************CHECKING CONNECTION****************************/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});
