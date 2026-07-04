const pgPool = require("./Connection.js")

const sql = {
    ADD_POST: "INSERT INTO posts (account_id, content, date, attachments, score, tags) values ($1, $2, $3, $4, $5, $6)",
    EDIT_POST: "UPDATE SET content=($1) WHERE post_id=($2)",
    UPVOTE_REDDIT: "UPDATE posts SET score = score + 1 WHERE post_id=($1)",
    DOWNVOTE_REDDIT:"UPDATE posts SET score = score - 1 WHERE post_id=($1)"
}

async function ADD_POST(data){
    await pgPool.query(sql.ADD_POST, [data.account_id, data.content, data.date, data.attachments, data.score, data.tags])
}
async function EDIT_POST(content, post_id){
    await pgPool.query(sql.EDIT_POST, [content, post_id])
}
async function UPVOTE_REDDIT(post_id){
    await pgPool.query(sql.UPVOTE_REDDIT, [post_id])
}
async function DOWNVOTE_REDDIT(post_id){
    await pgPool.query(sql.DOWNVOTE_REDDIT, [post_id])
}



module.exports = {ADD_POST,UPVOTE_REDDIT,DOWNVOTE_REDDIT,EDIT_POST};