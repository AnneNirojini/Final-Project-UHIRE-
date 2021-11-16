// const express = require('express')
// const app = express()
// const { pageRouter } = require('./pageRouter')
// const pageRouter = require('../routes/pageRouter')

// app.use(express.json())
// app.use(setUser)
// app.use('/page', pageRouter)

module.exports = function(app){

app.get('/services/', (req, res) => {
  res.send('Home Page')
})

app.get('/services/weddingservices', (req, res) => {
  res.send('Wedding Services Page')
})

app.get('/services/tourpackages', (req, res) => {
  res.send('Tour Packages Page')
})

app.get('/services/airportservices', (req, res) => {
  res.send('Airport Services Page')
})

app.get('/services/optionalhires', (req, res) => {
  res.send('optional hire Page')
})

app.get('/services/vehiclefleet', (req, res) => {
  res.send('Vehicle Fleet Page')
})

app.get('/login', (req, res) => {
    res.send('Login Page')
  })
  
app.get('/signup', (req, res) => {
   res.send('Signup Page')
  })

app.get('/enquiry', (req, res) => {
   res.send('Enquiry Page')
  }) 

};

