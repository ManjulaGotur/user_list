const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');



const PORT = 4000

const app = express();
app.use(cors());
app.use(express.json()); 

mongoose.connect('mongodb://127.0.0.1:27017/crude', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/users', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));

});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById(id)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.put('/users/:id', (req, res) => { 
    const id = req.params.id;
    UserModel.findByIdAndUpdate(id, { 
        name: req.body.name, 
        email: req.body.email, 
        designation: req.body.designation,
        phonenumber: req.body.phonenumber
    }, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete(id)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post("/users", (req, res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
