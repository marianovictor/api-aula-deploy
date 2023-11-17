require('dotenv').config();

const express = require('express');
const knex = require('./conexao');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.get('/', async(req, res)=>{
    
    try{
        const carros = await knex('carros');
        return res.json(carros);
    }catch(error){
        console.log(error);
        return res.json(error.message);
    }
})


app.listen(PORT, ()=>{
    console.log(PORT);
});