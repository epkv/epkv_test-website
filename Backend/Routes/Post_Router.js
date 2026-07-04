const router = require('express').Router();
const jwt = require('jsonwebtoken');
const postmodel = require('../Models/Post')

router.put('/add', async (req, res) => {
    try {
        if (req.body !== undefined || req.body.postdata !== undefined) {
            JSONDATA = JSON.parse(req.body.postdata)
            res.status(200).json(await postmodel.ADD_POST(JSONDATA))
        } else {
            res.status(400).json({ error: "Bad Request" })
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get('/upvote', async (req, res) => {
    try {
        if (req.query.post_id) {
            res.status(200).json(await postmodel.UPVOTE_REDDIT(req.query.post_id))
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get('/downvote', async (req, res) => {
    try {
        if (req.query.post_id) {
            res.status(200).json(await postmodel.DOWNVOTE_REDDIT(req.query.post_id))
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get('/edit', async (req, res) => {
    try {
        if (req.query.post_id) {
            const token = req.query.token
            jwt.verify(token, process.env.Secret, function (err, decoded) {
                if (err) {
                    res.status(500).json(err)
                } else {
                    if(req.body !== undefined || req.body.content !== undefined){
                        res.status(200).json(await postmodel.EDIT_POST(req.body.content))
                    } else {
                        res.status(500).json({error:"Missing edited content from body"})
                    }
                    
                }
            })
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


module.exports = router;