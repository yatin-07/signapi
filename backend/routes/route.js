const express = require("express")
const router = express.Router();
const Signin = require('../models/singin-schema');
router.post('/signin', (req,res) => {
    const signUser = new Signin({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    signUser.save()
    .then((data) =>{
        res.json(data)
    })
    .catch((error) => {
        res.json(error)
    })
})
module.exports = router;