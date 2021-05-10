const express = require('express')
const app = express();
const http = require('http').Server(app)
const PORT = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res) =>{
    res.sendFile(__dirname + '/public/homepage.html')
})
