const router = require('express').Router();

const postmodel = require('../Models/Post')

router.put('/add', async(req, res) =>{
 try {
    if(req.body.postdata){
        JSONDATA = JSON.parse(req.body.postdata)
        res.status(200).json(await postmodel.ADD_POST(JSONDATA))
    } else {
        res.status(400).json({error: "Bad Request"})
    }
 }  catch (err) {
        res.status(500).json({ error: err.message });
 } 
})

module.exports = router;