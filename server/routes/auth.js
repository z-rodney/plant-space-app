const router = require('express').Router()
const { User } = require('../db/user')
const bcrypt = require('bcrypt')

router.post('/login', async (req, res, next) => {
  try {
    const { username, password: textPassword } = req.body;
    const foundUser = await User.findOne({ where: {username: req.body.username} })
    if (!foundUser) {
      return res.status(404).send({message: 'User not found'})
    } else {
      const { id, password: hashedPassword } = foundUser;
      const passwordMatches = await bcrypt.compare(textPassword, hashedPassword)
      if (!passwordMatches) {
        return res.status(401).send({message: 'Invalid password'})
      } else {
        res.send({username, id})
      }
    }
  } catch(err) {
    next(err)
  }
})

module.exports = router
