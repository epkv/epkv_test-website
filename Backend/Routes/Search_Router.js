const router = require('express').Router();

const searchmodel = require('../Models/Search')

// localhost:8080/search/?startdate=xyz&enddate=xyz&search=xyz
// Every post from date range with or without search string
router.get('/', async(req, res) =>{
 try {
    if(req.query.startdate && req.query.enddate){
        res.status(200).json(await searchmodel.GETPOSTFROMDATE(req.query.search, req.query.startdate, req.query.enddate));
    } else {
        res.status(200).json(await searchmodel.SEARCHPOST(req.query.search));
    }
 } catch (err) {
    console.error(err);
    res.status(500).json({ error: "There was an error" });
 } 
})

// localhost:8080/search/all
// returns 50 of the most recent posts
router.get('/all', async(req, res) =>{
    try {
        res.status(200).json(await searchmodel.GETPOSTBYDATE_DESC());
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "There was an error" });
    } 
})

// localhost:8080/search/asc?search=xyz
// returns in ascending order of scores for a certain search string
router.get('/asc', async(req,res) =>{
    try{
        res.status(200).json(await searchmodel.SEARCHSCORE_ASC(req.query.search));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "There was an error" });
    }
})

// localhost:8080/search/desc?search=xyz
// returns in descending order of scores for a certain search string
router.get('/desc', async(req,res) =>{
     try{
        res.status(200).json(await searchmodel.SEARCHSCORE_DESC(req.query.search));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "There was an error" });
    }
})

// localhost:8080/search/above?search=xyz&above=int
// returns posts with score above a given value for a certain search string
router.get('/above', async(req,res) =>{
     try{
        res.status(200).json(await searchmodel.SEARCHSCOREABOVE(req.query.above, req.query.search));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "There was an error" });
    }
})

module.exports = router;