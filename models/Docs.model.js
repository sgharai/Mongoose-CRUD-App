//declarations and imports
const express = require('express')
const app = express()
const port = 3002
const mongoose = require('mongoose')
const uri = "mongodb+srv://sgharai:sofia0o0@cluster0-rbluw.mongodb.net/test?retryWrites=true&w=majority"
const Schema = mongoose.Schema;

module.exports = mongoose.model('Docs', Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    description: String,
    user: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}))