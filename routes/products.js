const router = require('express').Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/', productsControllers.getAllProducts);
router.get('/:id', productsControllers.getProduct);
router.get('/search/:key', productsControllers.searchProduct);
router.post('/', productsControllers.createProduct);

module.exports = router;