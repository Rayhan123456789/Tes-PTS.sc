const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        price: String,
        
    }
})



module.exports = item = mongoose.model('item', itemSchema);










// {
// //     // "Items":
// //     [
// //       {
// //         "name": "oval hat",
// //         "type": "hats",
// //         "prices": [
// //           {
// //             "priceFor": "regular",
// //             "price": 20000
// //           },
// //           {
// //             "priceFor": "VIP",
// //             "price": 15000
// //           }
// //         ]
// //       }, {
// //         "name": "square hat",
// //         "type": "hats",
// //         "prices": [
// //           {
// //             "priceFor": "regular",
// //             "price": 30000
// //           },
// //           {
// //             "priceFor": "VIP",
// //             "price": 20000
// //           },
// //           {
// //             "priceFor": "wholesale",
// //             "price": 15000				
// //           }
// //         ]
// //       }, {
// //         "name": "magic shirt",
// //         "type": "tops",
// //         "prices": [
// //           {
// //             "priceFor": "regular",
// //             "price": 50000
// //           }
// //         ]
// //       }
// //     ],
// //     // "Buyers":
// //     [
// //       {
// //         "name": "Ani",
// //         "type": "regular"
// //       }, {
// //         "name": "Budi",
// //         "type": "VIP"
// //       }, {
// //         "name": "Charlie",
// //         "type": "regular"
// //       }, {
// //         "name": "Dipta",
// //         "type": "wholesale"
// //       }
// //     ],
// //     // "Transaction":
// //     [
// //       {
// //         "item": "magic shirt",
// //         "qty": 1,
// //         "buyer": "Ani"
// //       }, {
// //         "item": "square hat",
// //         "qty": 2,
// //         "buyer": "Budi"
// //       }, {
// //         "item": "magic shirt",
// //         "qty": 1,
// //         "buyer": "Ani"
// //       }, {
// //         "item": "oval hat",
// //         "qty": 1,
// //         "buyer": "Ani"
// //       }, {
// //         "item": "square hat",
// //         "qty": 100,
// //         "buyer": "Dipta"
// //       }
// //     ]
// // }



