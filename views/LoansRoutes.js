const express = require('express');
const router = express.Router();

const LoansControllers = require('../controllers/LoansControllers');
const {isValidUser} = require('../middlewares/authMiddleware')

router.post('/movie', isValidUser(), LoansControllers.LoanMovie)
router.post('/show', isValidUser(), LoansControllers.LoanShow)
router.patch('/end', isValidUser(), LoansControllers.editLoan)
router.get('/myloans/:email', isValidUser(), LoansControllers.getMyLoans)



module.exports = router;