const express = require('express')
const item = require('../controller/productController')

const router = express.Router()

router.post('/seed', item.seedDataBase)
router.get('/csv', item.downloadProductCSV)
router.get('/json', item.downloadProductJSON)
router.post('/price', item.updatePrice)
router.get('/paginate', item.getPaginatedProduct)

module.exports = router
