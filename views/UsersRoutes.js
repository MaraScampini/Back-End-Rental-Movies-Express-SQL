const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/UsersControllers')
router.post('/create', UsersControllers.create);
router.get('/:id', UsersControllers.getData);
router.patch('/:id', UsersControllers.patchUser);
router.delete('/:id', UsersControllers.deleteUser);

module.exports = router;