const cors = require('cors');
const express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.listen(PORT, function(){
    console.log("Server is running on port " + PORT)
});

module.exports = app;