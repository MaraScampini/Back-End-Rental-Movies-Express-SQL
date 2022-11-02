const express = require('express');
const router = express.Router();

const ShowsControllers = require('../controllers/ShowsControllers')

// Todas las series
router.get('/', ShowsControllers.getAll);
// Series Top Rated
router.get('/tr', ShowsControllers.getTopRated);
// Series por fecha de estreno
router.get('/rd', ShowsControllers.getByDate);
// Series en el cine
router.get('/theater', ShowsControllers.getByTheater)
// Series por título
router.get('/title/:title', ShowsControllers.getByTitle);
// Series por ID
router.get('/:id', ShowsControllers.getById);


module.exports = router;