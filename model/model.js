const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required :true
    },
    date:{
        type: Date,
        default:new Date().toString()   
    }


});
module.exports = new mongoose.model("Blog",BlogSchema)