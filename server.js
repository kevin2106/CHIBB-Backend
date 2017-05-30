'use strict';
const AuthService = require('./utils/AuthService');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



app.get('/api/sensors', AuthService.authCheck, (req,res) => {
  let temperatureSensor = [
  {
    id: 88881,
    Name: "Sensor1",
    Type: "Temperature",
    TargetApiLink: "http://api.hr.nl",
    Unit: "Celsius",
    Readings:
    [
      {
        Timestamp: 123461617,
        Value: 20.1
      },
      {
        Timestamp: 123426384,
        Value: 22.2
      }
    ],
    isActive: "True"
  },
  {
    id: 88882,
    Name: "Sensor Outside",
    Type: "Wind Speed",
    TargetApiLink: "http://api.hr.nl",
    Unit: "M/s",
    Readings: [
      {
        Timestamp: 142325266,
        Value: 5
      },
      {
        Timestamp: 142452266,
        Value: 1.2
      }
    ],
    isActive: "False"
  }
  ];
  res.json(temperatureSensor);
})

app.listen(3333);
console.log('Listening on localhost:3333');
