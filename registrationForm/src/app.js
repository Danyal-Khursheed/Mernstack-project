const express = require("express");
const mongoose = require("mongoose")
const port = process.env.PORT || 3000;
const path = require("path");

const app  = express();
app.use(express.json());
app.use(express.urlencoded({extended : false}));


require("./db/conn")
const Register = require("./models/regester");
const async = require("hbs/lib/async");


const static_path = path.join (__dirname, "../public")
app.use(express.static(static_path));

app.set("view engine","hbs");


app.get("/",(req,res)=>{
    res.render("register")
})

app.post("/", async(req,res)=>{
   try{
    const password= req.body.password;
    const confirmpassword=  req.body.confirmpassword;

        if(password === confirmpassword){
            const register = new Register({
                yourName: req.body.yourName,
                email: req.body.email,
                password : password,
                confirmpassword : confirmpassword,
                
            });

            const saveData =  await register.save();
            res.json(saveData);
        }

        
        else{
            throw Error (" Your Password doesnot match");
            res.status(400).send("Pasword does not match")
            console.log("pasword Incoorect")
            res.status(400).send(error.message);
        }

    

    console.log(register);
    res.send(register)

   }
   catch(e){
        res.status(400).send(e);
   }
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.listen(port,(e)=>{
    if(e){
        console.log("an error occured while listening to port ", e)
    }
    else{
        console.log("Listening sucessfully to the port ");
    }
})