require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
const carros = ['S10', 'Hilux', 'Ford Ranger'];
app.use(express.json());

app.get('/', async(req, res)=>{
    return res.json(carros);
})


app.listen(PORT, ()=>{
    console.log(PORT);
});