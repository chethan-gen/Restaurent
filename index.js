const express = require('express');
const mongoose = require('mongoose');
const PORT = 8080;
const ItemsSchema=require('./iteamsSchema.js');
const RestaurentDetailsSchema = require('./restaurentDetailsSchema.js');

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({message:"Pong"})
});

app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
});