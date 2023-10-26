const router = require('express').Router()
const {newTranasction} = require('../controllers/transaction')


router.post('/',newTranasction)

module.exports = router