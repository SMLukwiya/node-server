const path = require('path');
const express = require('express');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))

app.get('/weather', (req, res) => {
  if(!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    });
  }

  geocode(req.query.address, (error, data) => {
    if (error) {
      return res.send({error});
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error})
      }
      res.send({
        forecast: forecastData,
        location: data.location,
        address: req.query.address
      });

    })
  })

})


app.get('/products', (req, res) => {
  console.log(req.query);
})

app.listen(3000, () => {
  console.log('Server up on port 3000');
})
