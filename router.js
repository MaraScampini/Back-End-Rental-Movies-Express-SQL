const express = require('express');
const router = express.Router();

const MoviesRoutes = require('./views/MoviesRoutes');
const ShowsRoutes = require('./views/ShowsRoutes');
const UsersRoutes = require('./views/UsersRoutes');

router.use('/movies', MoviesRoutes);
router.use('/shows', ShowsRoutes);
router.use('/users', UsersRoutes);

module.exports = router;