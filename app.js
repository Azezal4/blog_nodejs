// @express library
const express = require("express");

// @mongo-DB
const mongoose = require("mongoose");

const app = express();

// DB connect 
mongoose.connect("mongodb://localhost/blog",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
},
    () => {
        console.log("Connected to Database")
});


// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


// Routes 
app.use(require("./routes/index"))

// Server Configurations
app.listen(port = 3000,() => console.log("Server running @ {port}",port));

