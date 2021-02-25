const router = require("express").Router()
const { Plant, Detail } = require('../db')

router.get('/plants', async (req, res, next) => {
  try {
    const plants = await Plant.findAll();
    res.send(plants)
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
