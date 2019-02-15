require('dotenv').config();

const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');


const app = express();

app.use(express.json());

const { CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then((db) => {
  app.set('db', db);
  console.log('connected to db')
})

//Endpoints

app.get('/api/inventory', ctrl.getInventory)

app.post('/api/product', ctrl.createProduct)

app.delete('/api/product/:id', ctrl. deleteProduct)

app.put('/api/product/:id', ctrl.updateProduct)





app.listen( 4000, () => {console.log('Bingpot on Port 4000!')})