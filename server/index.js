require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive =require('massive');

const app = express();
app.use(bodyParser.json())

const {CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then((dbInstance) => {
  app.set('db', dbInstance)
}).catch( (err) => {
  res.sendStatus(500);
  console.log(err)
})

//Endpoints

app.get('/api/inventory', ctrl.getInventory)





app.listen( 4000, () => {console.log('Bingpot on Port 4000!')})