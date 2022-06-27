const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const Model = require('./model');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://mouaad_laouar:fahrenheit11@cluster0.uzyicoy.mongodb.net/OnePiece', {
    useNewUrlParser: true
}).then((result) => {
    console.log('connected to the data')
})

app.get('/read', async (req, res) => {
    Model.find({},(err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.get('/', (req, res) => {
    res.send('<h1>hello mouaad</h1>');
})

app.listen(4646, () => {
    console.log('server are runnning o port 4646 good luck;')
})