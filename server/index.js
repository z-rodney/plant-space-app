const express = require("express")
const app = express();
const { syncAndSeed } = require('./db/seed')
const morgan = require('morgan')
const path = require('path')

app.use(morgan('dev'))

app.use(express.json())


app.use(express.static(path.join(__dirname,'/public')))

app.get('/', (req, res, next) => {
  res.render('index.html')
})

app.use('/api', require('./routes/apiRoutes'))


app.use((req, res, next) => {
  res.status(404).send(`Uh-Oh, page not found`)
})

app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})



const port = process.env.PORT || 3035;
const init = async () => {
  await syncAndSeed();
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
}

init();
