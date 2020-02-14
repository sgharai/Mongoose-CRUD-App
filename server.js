const express = require('express')
const app = express()
const port = 3002
const mongoose = require('mongoose')
const uri = "mongodb+srv://{USERNAME}:<PASSWORD>@cluster0-rbluw.mongodb.net/test?retryWrites=true&w=majority"
const Schema = mongoose.Schema;
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const Doc = require('./Docs.model')
const User = require('./User.model')

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => res.send('Hello World!'))

//CRUD for documents
app.post('/addDoc', (req, res) => {
    console.log("Adding new doc")
    const docObj = {
        "_id" : new mongoose.Types.ObjectId(),
        "title" : req.body.title,
        "description" : req.body.description,
        "user" : "5e46f09d575c232f346e0e58"
        //irl you would parse ID directly from request from frontend
    }
    const newDoc = new Doc(docObj);
    newDoc.save((err, doc) => {
        if(err) {
            res.status(400).send("An error has occurred")
        }
        else{
            res.status(200).json(doc)
        }
    })
})

app.get('/docs',(req, res) => { 
    console.log("Getting docs")
    Doc.find({}).populate("user").exec((err,docs) =>{
        if(err) {
            res.status(400).send("An error has occurred")
        }
        else{
            res.status(200).json(docs)
        }
    })
})

app.put('/docs/:id',(req, res) => { 
    console.log("Editing a document")
    const docObj = {
        "title" : req.body.title,
        "description" : req.body.description,
        //irl you would parse ID directly from request from frontend
    }
    Doc.findByIdAndUpdate(req.params.id, docObj, {new: true}).exec((err,docs) =>{
        if(err) {
            res.status(400).send("An error has occurred")
        }
        else{
            res.status(200).json(docs)
        }
    })
})

app.delete('/docs/:id',(req, res) => { 
    console.log("Getting docs")
    Doc.findByIdAndDelete(req.params.id).exec((err,doc) =>{
        if(err) {
            res.status(400).send("An error has occurred")
        }
        else{
            res.status(200).json(doc)
        }
    })
})


//CRUD for users


app.post('/addUser', (req, res) => {
    console.log("Adding new user")
    const userObj = {
        "_id" : new mongoose.Types.ObjectId(),
        "name" : req.body.name
    }
    const newUser = new User(userObj)
    newUser.save((err, user) => {
        if(err) {
            res.status(400).send("An error has occurred")
        }
        else{
            res.status(200).json(user)
        }
    })
})
// to add post request on postman: go to localhost URL with /addUser extn, fix headers to be Accept and Content Type with application/json, put JSON user object in body 


app.listen(port, () => console.log(`Listening on port ${port}`))