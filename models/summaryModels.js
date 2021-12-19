const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const summarySchema = new Schema({
    totalTransaction: {
        category: String,
        revenue: String,
       
}
},
{

bestSellingItem: {
    "category": String,
    "revenue": String,
} 
},

{
    bestSellingCategory:{
    category: String,
    revenue: String,
}  
},



module.exports = summary = mongoose.model('summary', summarySchema)
