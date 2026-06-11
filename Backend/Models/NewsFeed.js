const pgPool = require("./connection")

const sql = {
   GET_FEED_DESC: "SELECT * from newsfeed order by date DESC limit 20",
   ADD_TO_FEED: "INSERT INTO newsfeed (date, content, attachment, tags, premium) valeus ($1, $2, $3, $4, $5)",
   DELETE_FROM_FEED: "DELETE * FROM newsfeed WHERE news_id=($1)"
}