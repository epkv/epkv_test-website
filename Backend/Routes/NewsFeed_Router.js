const router = require('express').Router();

const newsfeedmodel = require('../Models/NewsFeed')

//gets 20 of the newest news posts
router.get('/', async(req, res) =>{
 try {
    res.status(200).json(await newsfeedmodel.GETFEED());
 } catch (err) {
    res.status(500).json({ error: "There was an error" });
 } 
})
//delete from where id
router.delete('/:id', async(req, res) =>{
 try {
    res.status(200).json(await newsfeedmodel.DELETEFROMFEED(req.params.id))
 }  catch (err) {
    res.status(500).json({ error: "There was an error" });
 } 
})
//adds tp feed 
router.put('/', async(req, res) =>{
 try {
    if(req.body.newsfeeddata){
        res.status(200).json(await newsfeedmodel.ADDTOFEED(req.body.newsfeeddata))
    } else {
        res.status(400).json({error: "Bad Request"})
    }
 }  catch (err) {
        res.status(500).json({ error: "There was an error" });
 } 
})
