const pgPool = require("./Connection.js")

const sql = {
    ADD_USER: 'INSERT INTO "user-details" (username, password, email) values ($1, $2, $3)',
    GET_PASS: 'SELECT password FROM "user-details" WHERE userid=($1)',
    GET_USERID: 'SELECT userid FROM "user-details" WHERE username=($1)'
}

async function ADD_USER(username, password){
    await pgPool.query(sql.ADD_USER, ["Tempuser", "TempUserpass", "Tempusermail"])
}
async function GETPASS_USER(userid){
     await pgPool.query(sql.GET_PASS, [userid])
}   
async function GETUSER_ID(username) {
    await pgPool.query(sql.GET_USERID, [username])
}

module.exports = {GETUSER_ID, ADD_USER,GETPASS_USER};