const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/registration",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>[
    console.log("connection sucessfull")
]).catch((e)=>{
    console.log(`Failed to connect to database ${e}`);
})