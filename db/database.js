const mongoose = require("mongoose");
// require('dotenv').config()

module.exports = async() => {
    try {
        await mongoose.connect("mongodb://indonesia123:<indonesia123>rayhanun41@gmail.com<rayhan>/myFirstDatabase?ssl=true&replicaSet=atlas-2g576x-shard-0&authSource=admin&retryWrites=true&w=majority", {});
        console.log("MongoDB are Connected")
    } catch (err) {
        console.log(err)
    }
}
