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
    temperature: 19.2
  },
  {
    id: 88882,
    temperature: 20.1
  },
  {
    id: 88883,
    temperature: 18.5
  },
  {
    id: 88884,
    temperature: 19.5
  },
  {
    id: 88885,
    temperature: 19.9
  },
  {
    id: 88886,
    temperature: 20.2
  }
  ];
  res.json(temperatureSensor);
})

app.listen(3333);
console.log('Listening on localhost:3333');
