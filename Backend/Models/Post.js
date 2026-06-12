const pgPool = require("./Connection.js")

const sql = {
    ADD_POST: "INSERT INTO posts (account_id, content, date, attachments, score, tags) values ($1, $2, $3, $4, $5, $6)",
}

async function ADD_POST(data){
    await pgPool.query(sql.ADD_POST, [data.account_id, data.content, data.date, data.attachments, data.score, data.tags])
}


module.exports = {ADD_POST};