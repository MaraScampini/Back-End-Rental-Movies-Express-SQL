const express = require('express');
const router = express.Router();

const ShowsControllers = require('../controllers/ShowsControllers')

// Pelis Top Rated
router.get('/tr', ShowsControllers.getTopRated);
// Series por ID
router.get('/id/:id', ShowsControllers.getById);
// Series por título
router.get('/title/:title', ShowsControllers.getByTitle);
// Series por fecha de estreno
router.get('rd', ShowsControllers.getByDate);

module.exports = router;