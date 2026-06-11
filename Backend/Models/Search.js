const pgPool = require("./Connection.js")

const sql = {
    GET_POST: 'SELECT * FROM posts limit 200',
    GET_POST_BY_DATE_DESC: 'SELECT * FROM posts order by date DESC limit 50',
    GET_POST_BY_DATE_ASC: 'SELECT * FROM posts order by date ASC limit 50',
    GET_POST_THAT_INCLUDES: 'SELECT * FROM posts WHERE ($1) ~ content LIMIT 50',
    GET_POST_THAT_INCLUDES_FROM_DATES: 'SELECT * FROM posts WHERE ($1) ~ content AND date>=($2) AND date<($3) LIMIT 50'
}

async function GETPOST(){
    await pgPool.query(sql.GET_POST)
}

async function GETPOSTFROMDATE(searchstring, startdate, enddate){
    await GET_POST_FROM_DATE(sql.GET_POST_THAT_INCLUDES_FROM_DATES, [(searchstring, startdate, enddate)])
}

async function GETPOSTBYDATE_DESC(){
    await pgPool.query(sql.GET_POST_BY_DATE_DESC)
}

async function GETPOSTBYDATE_DESC(){
    await pgPool.query(sql.GET_POST_BY_DATE_ASC)
}

async function SEARCHPOST(searchstring){
    await pgPool.query(sql.GET_POST_THAT_INCLUDES, [(searchstring)])
}


module.exports = {GETPOST, GETPOSTFROMDATE, GETPOSTBYDATE_DESC, GETPOSTBYDATE_DESC, SEARCHPOST};