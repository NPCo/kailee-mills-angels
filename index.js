// From Dan's Guides: https://github.com/justsml/guides/tree/master/express/setup-guide
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')
const app = module.exports = express()
const port = parseInt(process.env.PORT || 3000)
require('dotenv').config()

app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan(process.env.NODE_ENV !== 'production' ? 'dev' : 'combined'))
app.use(cors(process.env.NODE_ENV !== 'production' ? undefined : { origin: true, credentials: true }))

app.use(express.static(path.join(__dirname, "client", "build")))
app.use('/api/angel', require('./routes/angel'))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}

app.listen(port)
  .on('error', console.error.bind(console))
  .on('listening', console.log.bind(console, `Listening on http://0.0.0.0:${port}`))
