require('dotenv').config();

const express = require('express');
const knex = require('./conexao');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/', async(req, res)=>{
    
    try{
        const carros = await knex('carros');
        return res.json(carros);
    }catch(error){
        return res.json('Erro interno do servidor');
    }
})


app.listen(PORT, ()=>{
    console.log(PORT);
});