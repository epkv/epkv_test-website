const pgPool = require("./connection")

const sql = {
   GET_FEED_DESC: "SELECT * from newsfeed order by date DESC limit 20",
   ADD_TO_FEED: "INSERT INTO newsfeed (date, content, attachment, tags, premium) values ($1, $2, $3, $4, $5)",
   DELETE_FROM_FEED: "DELETE * FROM newsfeed WHERE news_id=($1)"
}

async function GETFEED(){
    await pgPool.query(sql.GET_FEED_DESC)
}
async function ADDTOFEED(data){
    await pgPool.query(sql.ADD_TO_FEED, [data.date, data.content, data.attachment, data.tags, data.premium])
}
async function DELETEFROMFEED(id){
    await pgPool.query(sql.DELETE_FROM_FEED, [id])
}

module.exports = {GETFEED, ADDTOFEED, DELETEFROMFEED};