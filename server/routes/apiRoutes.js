const router = require("express").Router()
const { Plant, Detail } = require('../db')
const { User } = require('../db/user')

router.post('/users', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({
      username,
      password
    }, {
        fields: ['username', 'password'],
      }
    )
    const { id, isAdmin } = newUser
    res.send({id, username, isAdmin})
  } catch(err) {
    next(err)
  }
})

router.get('/plants', async (req, res, next) => {
  try {
    const { user } = req
    const plants = await Plant.findAll();
    res.send({ user, plants })
  } catch(err) {
    next(err)
  }
})

router.get('/plants/:id', async (req, res, next) => {
  try {
    const plant = await Plant.findByPk(req.params.id, {
      include: Detail
    })
    res.send(plant)
  } catch(err) {
    next(err)
  }
})

router.get('/details', async (req, res, next) => {
  try {
    const details = await Detail.findAll();
    res.send(details)
  } catch(err) {
    next(err)
  }
})

module.exports = router
