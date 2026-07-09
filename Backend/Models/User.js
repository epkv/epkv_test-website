const pgPool = require("./Connection.js")

const sql = {
    ADD_USER: 'INSERT INTO "user-details" (username, password, email) values ($1, $2, $3)',
    GET_PASS: 'SELECT password FROM "user-details" WHERE account_id=($1)',
    GET_USERID: 'SELECT account_id FROM "user-details" WHERE username=($1)'
}

async function ADD_USER(username, password){
    await pgPool.query(sql.ADD_USER, [username, password, "Tempusermail"])
}

async function GETPASS_USER(account_id){
    const results = await pgPool.query(sql.GET_PASS, [account_id])
     if(results.rowCount !== 0){
            return results.rows[0].password
    }
}

async function GETUSER_ID(username) {
    const results = await pgPool.query(sql.GET_USERID, [username])
    if(results.rowCount !== 0){
            return results.rows[0].account_id
    }
}

module.exports = {GETUSER_ID, ADD_USER, GETPASS_USER};