const express = require('express');
const { connect } = require('mongoose');
const {database} = require('./database/db.js');
database()
// import express from 'express'
const app = express();

app.get('/',(req,res)=>{
    res.send("hi")
})

app.listen(8000,()=>{
    console.log("Server Started Successfully");
})