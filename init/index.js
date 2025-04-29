require('dotenv').config();

const mongoose = require("mongoose");
const initData = require("./data.js");

const Listing = require("../models/listing.js");

// const mongo_URL = "mongodb://127.0.0.1:27017/wanderlust";

const dbUrl = process.env.DB_URL;

console.log(dbUrl);

// const dbUrl = "mongodb+srv://vashugupta03:qwertyuiop@cluster1.qzdrft3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";


main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });


async function main() {
    // await mongoose.connect(mongo_URL);  
    await mongoose.connect(dbUrl);  
}

// const initDB = async () => {
//     await Listing.deleteMany({});
//     initData.data = initData.data.map((obj) => ({...obj, owner: "67dc048ad0daf93d49353954"}));   
//     await Listing.insertMany(initData.data);
//     console.log("data was initialised");

// } 

// initDB();