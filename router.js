const express = require('express');
const router = express.Router();

const MoviesRoutes = require('./views/MoviesRoutes');
const ShowsRoutes = require('./views/ShowsRoutes')

router.use('/movies', MoviesRoutes);
router.use('/shows', ShowsRoutes);

module.exports = router;