const express = require('express');
const db = require('./db/db');
const app = express();
const PORT = 3000;

app.use(express.json());


app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`)

  db.authenticate().then(() => {
    console.log("Conectados a la DB")
  }).catch(error => {
    console.log('Se ha producido un error: ' + error)
  })
})