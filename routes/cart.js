const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.get('/find', cartController.getCart);
router.post('/', cartController.addCart);
router.post('/quantity', cartController.decrementCartItem);
router.delete('/:cartItemId' ,cartController.deleteCartItem);

module.exports = = router;