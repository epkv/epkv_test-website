const cors = require('cors');
const express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routers
const newsfeed = require('./Routes/NewsFeed')
const search = require('./Routes/Search')

const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/', deleteRouter);
app.use('/', loginRouter);
app.use('/', groupRouter);

app.listen(PORT, function(){
    console.log("Server is running on port " + PORT)
});

module.exports = app;