const pgPool = require("./Connection.js")

const sql = {
    GET_POST: 'SELECT * from posts',
    GET_POST_BY_DATE_DESC: 'SELECT * from posts order by date DESC',
    GET_POST_BY_DATE_ASC: 'SELECT * from posts order by date ASC',
}

async function GETPOST(){
    await pgPool.query(sql.GET_POST)
}
async function GETPOSTBYDATE_DESC(){
    await pgPool.query(sql.GET_POST_BY_DATE_DESC)
}
async function GETPOSTBYDATE_DESC(){
    await pgPool.query(sql.GET_POST_BY_DATE_ASC)
}
