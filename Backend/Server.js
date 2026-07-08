const cors = require('cors');
const express = require('express');
const cookieparser = require('cookie-parser')
var app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieparser())

//Routers
const newsfeed = require('./Routes/NewsFeed_Router')
const search = require('./Routes/Search_Router')
const post = require('./Routes/Post_Router')
const user = require('./Routes/User_Router')

const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/news', newsfeed);
app.use('/search', search);
app.use('/post', post);
app.use('/user', user);


app.listen(PORT, function () {
    console.log("Server is running on port " + PORT)
});

module.exports = app;