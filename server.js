const express = require('express')
const dotenv = require('dotenv');

const app = express();

dotenv.config({
    path: './config/config.env'
})

app.get('/', (req, res)=>{
    res.send({greet: "hello boy"})
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`The server is listening on PORT ${process.env.PORT} in ${process.env.NODE_ENV}`)
});