require('dotenv').config()

const router = require('express').Router()
const { User } = require('../db/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/whoami', (req, res, next) => {
  console.log(req.headers)
  res.send(req.user)
})

router.post('/login', async (req, res, next) => {
  try {
    const { username, password: textPassword } = req.body;
    const foundUser = await User.findOne({ where: {username: username} })
    if (!foundUser) {
      return res.status(404).send({message: 'User not found'})
    } else {
      const { id, isAdmin, password: hashedPassword } = foundUser;
      const passwordMatches = await bcrypt.compare(textPassword, hashedPassword)
      if (!passwordMatches) {
        return res.status(401).send({message: 'Invalid password'})
      } else {
        const userData = { username, sub: id, isAdmin }
        const accessToken = jwt.sign(userData, process.env.ACCESS_TOKEN_KEY)
        res.send(accessToken)
      }
    }
  } catch(err) {
    next(err)
  }
})

module.exports = router
