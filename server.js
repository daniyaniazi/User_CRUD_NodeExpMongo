const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')
const connectDB = require('./server/database/connection')

dotenv.config({
    path: 'config.env'
})
const app = express()
//log request
app.use(morgan("tiny"))

//mongodb connection
connectDB()

//parse req 
// app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//set view engine 
app.set("view engine", "ejs")
//app.set('views' , path.resolve(__dirname,"views"))

//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css'))) //css/style.css
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))


//load routes
app.use('/', require('./server/routes/router'))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(
        "Server is running on port no ", PORT
    )
})