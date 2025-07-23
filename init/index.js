require('dotenv').config();

const mongoose = require("mongoose");
const initData = require("./data.js");

const Listing = require("../models/listing.js");


const dbUrl = process.env.DB_URL;

console.log(dbUrl);


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

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "67dc048ad0daf93d49353954"}));   
    await Listing.insertMany(initData.data);
    console.log("data was initialised");

} 

initDB();