const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
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

router.put('/register', async(req, res) => {
  //check items exist
  if(req.body === undefined || req.body.username === undefined || req.body.password === undefined){
    res.status(500).json("Wrong format. Missing password or username");
    return
  }
  //perform check before sending
  if(PassReq(req.body.password)){
    const passHash = await bcrypt.hash(req.body.password, 10)
    try{
      res.status(200).json(await usermodel.ADD_USER(req.body.username, passHash));
    } catch (err){
      res.status(500).json(err.message);
    }
  }
})

// 
router.put('/login', async(req, res) => {

  //check items exist
  if(!req.body.username || !req.body.password){
    res.status(500).json("Wrong format. Missing password or username");
    return
  }

  //Gets UserId Based on username!
  const UserId = await usermodel.GETID_USER(req.body.username)

  //Fecth pass for comaparison
  const HashedPass = await usermodel.GETPASS_USER(UserId)

  //Compare passwords
  if(bcrypt.compare(req.body.password, HashedPass)){

    //Create Token with secret
     const token = jwt.sign({
          username: req.body.username,
          userid: req.body.userid,
          expr: "1h"
        }, process.env.Secret)
      //add Token
      response.cookie("jtw", token, {
        sameSite: "none",
        secure: true,
      })
      
    res.status(200).json("Success");
  } else {
    //Wrong pass or username
    res.status(500).json("Failed");
  }
})



function PassReq(pass){
// check for special characters
const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`
const containsspecial = specialChars.split('').some(char => pass.includes(char))
//make sure length and special characters are good
if(pass.toString().length > 8 && containsspecial){
  return true
} else {
  return false
}
}

module.exports = router;