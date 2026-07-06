const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const usermodel = require('../Models/User')

// localhost:8080/user/register body with "username" and "password"
router.put('/register', async (req, res) => {
  //check items exist
  if (req.body === undefined || req.body.username === undefined || req.body.password === undefined) {
    res.status(500).json("Wrong format. Missing password or username");
    return
  }
  //perform check before sending
  if (PassReq(req.body.password)) {
    const passHash = await bcrypt.hash(req.body.password, 10)
    try {
      res.status(200).json(await usermodel.ADD_USER(req.body.username, passHash));
    } catch (err) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(500).json("Password requirements not met")
  }
})

// localhost:8080/user/login body with "username" and "password"
router.put('/login', async (req, res) => {
  //check items exist
  if (req.body === undefined || req.body.username === undefined || req.body.password === undefined) {
    res.status(500).json("Wrong format. Missing password or username");
    return
  }
  //Gets UserId Based on username!
  const UserId = await usermodel.GETUSER_ID(req.body.username).then(async (userid) => {
    await usermodel.GETPASS_USER(userid).then(async (HashedPassword) => {
      //Compare passwords
      await bcrypt.compare(req.body.password, HashedPassword).then((Comparison) => {
        //if password was correct
        if (Comparison) {
          //Create Token with secret
          const token = jwt.sign({
            userid: userid, 
          }, process.env.Secret, {
            expiresIn: '30m'
          });
          //add Token
          res.cookie("jwt", token, {
            sameSite: "none",
            secure: true,
          })
          res.status(200).json("Login Succesfull");
        } else {
          //Wrong pass or username
          res.status(500).json("Login Failed");
        }
      })
    })
  })
})

router.get('/', async (req, res) => {
  const token = req.cookies.jwt
  jwt.verify(token, process.env.Secret, function(err, decoded){
    if(err){
      res.status(500).json(err)
    } else {
      console.log("Token verified")
      res.status(200).json("Token Verified")
    }
  })

})

function PassReq(pass) {
  // check for special characters
  const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`
  const containsspecial = specialChars.split('').some(char => pass.includes(char))
  //make sure length and special characters are good
  if (pass.toString().length > 8 && containsspecial) {
    return true
  } else {
    return false
  }
}

module.exports = router;