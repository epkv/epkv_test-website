const router = require('express').Router();

const usermodel = require('../Models/User')

// localhost:8080/search/?startdate=xyz&endate=xyz&search=xyz
// Every post from date range with or without search string
router.get('/', async(req, res) =>{
 try {
   res.status(200).json(await usermodel.ADD_USER());
 } catch (err) {
    res.status(500).json(err.message);
 } 
})

module.exports = router;