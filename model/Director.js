const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectroSchema = new Schema({
    name:String,
    age: Number
});

module.exports = mongoose.model('Director', DirectroSchema);