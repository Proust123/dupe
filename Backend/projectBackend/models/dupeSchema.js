const mongoose = require('mongoose')

const dupeSchema = new mongoose.Schema({
        image : String,
        name : String,
        price : Number,   
})

module.exports = mongoose.model('dupe', dupeSchema)