const router = require('express').Router();

const searchmodel = require('../Models/Search')

// localhost:8080/search/?startdate=xyz&endate=xyz&search=xyz
// Every post from date range with or without search string
router.get('/', async(req, res) =>{
 try {
    if(req.query.startdate && req.query.enddate){
        res.status(200).json(await searchmodel.GETPOSTFROMDATE(req.query.search, req.query.startdate, req.query.enddate));
    } else {
        res.status(200).json(await searchmodel.SEARCHPOST(req.query.search));
    }
 } catch (err) {
    res.status(500).json({ error: "There was an error" });
 } 
})
// localhost:8080/search/all
//returns 50 of the most recent posts
router.get('/all', async(req, res) =>{
    try {
        res.status(200).json(await searchmodel.GETPOSTBYDATE_DESC());
    } catch (err) {
        res.status(500).json({ error: "There was an error" });
    } 
})
module.exports = router;