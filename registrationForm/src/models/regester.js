const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    yourName :{
        type: String,
        requried : true,
    },
    email: {
        type : String,
        requried : true,
        unique : true  
          },
    password : {
        type : String,
        requried : true
    },
    confirmpassword : {
        type : String,
        requried : true
    }
})

//Now we need to create collection 
const Regester = new mongoose.model("Register", employeeSchema);

module.exports = Regester;
