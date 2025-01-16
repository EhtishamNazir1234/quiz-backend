require('dotenv').config();
const express = require('express');
const app=express();
const port=5000;
app.get('/',(req,res)=>{
res.send('Hello world!')
})
app.get('/twitter',(req,res)=>{
    res.send('ehtishamnazir1234')
})
app.get('/login',(req,res)=>{
    res.send('<h1>ehtisham Nazir')
})
app.listen(process.env, () => {
  console.log(`app listening on port ${port}`);
});

