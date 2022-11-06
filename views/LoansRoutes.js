const express = require('express');
const router = express.Router();

const LoansControllers = require('../controllers/LoansControllers');
const {isValidUser, isValidRole} = require('../middlewares/authMiddleware')

router.post('/movie', isValidUser(), LoansControllers.LoanMovie)
router.post('/show', isValidUser(), LoansControllers.LoanShow)
router.patch('/end', isValidUser(), LoansControllers.editLoan)
router.get('/myloans/:email', isValidUser(), LoansControllers.getMyLoans)
router.get('/activeloans', isValidRole("admin"), LoansControllers.getAllActive)
router.get('/', isValidRole("admin"), LoansControllers.getAll)



module.exports = router;