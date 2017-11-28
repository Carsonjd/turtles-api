const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

const routes = require('./routes/routes.js')
app.use('/turtles', routes)

app.use((req,res,next) => {
  const status = err.status || 500
  res.status(status).json({error: err})
})

app.use((req,res,next) => {
  res.status(status).json({error: {message: 'Not Found'}})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
