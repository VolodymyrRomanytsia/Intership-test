const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema =new Schema({
    studentname: {
        type: String,
        required: true,
        unique: true
    },
    knowledge: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('students', studentSchema)