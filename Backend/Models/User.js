const pgPool = require("./Connection.js")

const sql = {
    ADD_USER: 'INSERT INTO "user-details" (username, password, email) values ($1, $2, $3)',
}

async function ADD_USER(){
    await pgPool.query(sql.ADD_USER, ["Tempuser", "TempUserpass", "Tempusermail"])
}


module.exports = {ADD_USER};