const pgPool = require("./Connection.js")

const sql = {
    GET_POST: 'SELECT * FROM posts limit 200',
    GET_POST_BY_DATE_DESC: 'SELECT * FROM posts order by date DESC limit 50',
    GET_POST_BY_DATE_ASC: 'SELECT * FROM posts order by date ASC limit 50',
    GET_POST_THAT_INCLUDES: 'SELECT * FROM posts WHERE content ~ ($1) LIMIT 50',
    GET_POST_THAT_INCLUDES_FROM_DATES: 'SELECT * FROM posts WHERE content ~ ($1) AND date>=($2) AND date<($3) LIMIT 50'
}

async function GETPOST(){
    const results = await pgPool.query(sql.GET_POST)
    return results.rows
}

async function GETPOSTFROMDATE(searchstring, startdate, enddate){
    const results = await GET_POST_FROM_DATE(sql.GET_POST_THAT_INCLUDES_FROM_DATES, [(searchstring, startdate, enddate)])
    return results.rows
}

async function GETPOSTBYDATE_DESC(){
    const results = await pgPool.query(sql.GET_POST_BY_DATE_DESC)
    return results.rows
}

async function GETPOSTBYDATE_ASC(){
    const results = await pgPool.query(sql.GET_POST_BY_DATE_ASC)
    return results.rows
}

async function SEARCHPOST(searchstring){
    console.log(searchstring)
    const results = await pgPool.query(sql.GET_POST_THAT_INCLUDES, [(searchstring)])
    return results.rows
}


module.exports = {GETPOST, GETPOSTFROMDATE, GETPOSTBYDATE_ASC, GETPOSTBYDATE_DESC, SEARCHPOST};