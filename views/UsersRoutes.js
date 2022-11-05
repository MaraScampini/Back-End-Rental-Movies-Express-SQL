const express = require('express');
const router = express.Router();
const { authBearerMiddleware, isValidRole, isvali, isValidUser } = require("../middlewares/authMiddleware")


const UsersControllers = require('../controllers/UsersControllers')
router.get('/:email', isValidUser(), UsersControllers.getData);
router.patch('/:email', isValidUser(), UsersControllers.patchUser);
router.delete('/:id', isValidRole("admin"), UsersControllers.deleteUser);

module.exports = router;