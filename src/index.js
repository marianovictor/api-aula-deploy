require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/', async(req, res)=>{
    return res.json('API OK CYCLIC!');
})


app.listen(PORT, ()=>{
    console.log(PORT);
});