const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const studentsRoutes = require('./routes/students')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error))

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/students', studentsRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
      res.sendFile(
        path.resolve(
          __dirname, 'client', 'build', 'index.html'
        )
      )
    })
  }
  
module.exports = app