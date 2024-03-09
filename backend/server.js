// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users')

const app = express();
app.use(cors());
app.use(express.json()); 
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1:27017/crud')


app.get('/getUserlist',(req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})


app.get('/getUsers/:id',(req,res) => {
    const id =req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.put('/updateUsers/:id', (req, res) => { 
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, { 
        name: req.body.name, 
        email: req.body.email, 
        designation: req.body.designation,
        phonenumber: req.body.phonenumber
    }, { new: true }) 
    .then(users => res.json(users))
    .catch(err => res.json(err));
});


app.delete('/deleteUsers/:id',(req,res) => {
    const id =req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})

app.post("/createUsers",(req,res)=>{
    UserModel.create(req.body)
    .then(users =>res.json(users))
    .catch(err =>res.json(err))
})



// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
