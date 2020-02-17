//declarations and imports
const express = require('express')
const app = express()
const port = 3003
const mongoose = require('mongoose')
const uri = "mongodb+srv://sgharai:sofia0o0@cluster0-rbluw.mongodb.net/test?retryWrites=true&w=majority"
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        validate: {
            validator: function(text){
                return text.length > 0;
            },
            message: "Empty name is not allowed"
        }
    }
}))