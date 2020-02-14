// //declarations and imports
// const express = require('express')
// const app = express()
// const port = 3002
// const mongoose = require('mongoose')
// const uri = "mongodb+srv://sgharai:sofia0o0@cluster0-rbluw.mongodb.net/test?retryWrites=true&w=majority"
// const Schema = mongoose.Schema;

// //express boilerplate
// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Listening on port ${port}`))

// //mongoose code
// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

// const catSchema = new Schema({
//     name: String,
//     age: Number
// })

// const Cat = mongoose.model("Cat", catSchema)

// const garfield = new Cat ({name:'garfield', age: 15})

// let str = `This is my cat: ${garfield}`

// garfield.save().then(() => console.log(str))
// app.get('/cat', (req, res) => res.send(str))

// Cat.find().then(res => console.log(res))

// //don't use collection.find bc using mongodb website, not service-- doesn't have the driver to use mongodb service methods

