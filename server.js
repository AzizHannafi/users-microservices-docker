require('dotenv').config()
require('./Database/Config')
const Routes = require('./Routes/Route') 
const express = require('express')
const app = express()
const port = process.env.SERVER_PORT
const cors = require('cors')



app.use(cors())
app.get('/',(req,res)=>{
    res.send('<center> <h2> welcome to ChatSystem Docker 😎 😎 🔥 🔥</h2>  </center>')
})
app.use("/Api", Routes);



app.listen(port,()=>{
    console.log(`app running at : http://localhost:${port}`)
})
