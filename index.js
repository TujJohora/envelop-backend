const express = require("express");
const cors= require("cors");

// making express app
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//Listening for requests
app.listen(PORT, (req,res)=>{

})