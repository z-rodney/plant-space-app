const express = require("express")
const app = express();
const { db } = require('./db')
const morgan = require('morgan')
const path = require('path')
const { authorizeUser } = require('./authMiddleware')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, './public')))

app.use(authorizeUser)
app.use('/auth', require('./routes/auth'))
app.use('/api', require('./routes/apiRoutes'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})


app.use((req, res, next) => {
  res.status(404).send(`Uh-Oh, page not found`)
})

app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})



const port = process.env.PORT || 3035;
const init = async () => {
  await db.sync();
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
}

init();
