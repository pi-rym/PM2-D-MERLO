require("dotenv").config();
const mongoose = require("mongoose");
const {MONGO_URI} = process.env;

const dbConetion = async ()=>{
    await mongoose.connect(MONGO_URI)
};

module.exports= dbConetion;