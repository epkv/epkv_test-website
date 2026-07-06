const router = require('express').Router();
const jwt = require('jsonwebtoken');
const postmodel = require('../Models/Post')

/// localhost:8080/upost/add body with {content:string, date:date, attachment:jsonb, score:int, tags:string}
router.put('/add', async (req, res) => {
    try {
        if (req.body !== undefined || req.body.postdata !== undefined) {
            const token = req.cookies.jwt
            jwt.verify(token, process.env.Secret, async function (err, decoded) {
                if(err){
                    res.status(500).json(err)
                } else {
                    JSONDATA = JSON.parse(req.body.postdata)
                    res.status(200).json(await postmodel.ADD_POST(decoded.userid, JSONDATA))
                }
            })
        } else {
            res.status(400).json({ error: "Bad Request" })
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

/// localhost:8080/upost/upvote?post_id=int 
router.get('/upvote', async (req, res) => {
    try {
        if (req.query.post_id) {
            res.status(200).json(await postmodel.UPVOTE_REDDIT(req.query.post_id))
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

/// localhost:8080/upost/downvote?post_id=int
router.get('/downvote', async (req, res) => {
    try {
        if (req.query.post_id) {
            res.status(200).json(await postmodel.DOWNVOTE_REDDIT(req.query.post_id))
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

/// localhost:8080/upost/edit?post_id=int body with "content" and user token
router.get('/edit', async (req, res) => {
    try {
        if (req.query.post_id) {
            const token = req.cookies.jwt
            jwt.verify(token, process.env.Secret, async function (err, decoded) {
                if (err) {
                    res.status(500).json(err)
                } else {
                    if(req.body !== undefined || req.body.content !== undefined){
                        res.status(200).json(await postmodel.EDIT_POST(req.body.content, req.query.post_id, decoded.userid))
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