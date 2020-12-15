const router = require('express').Router();
const { getAllOrders, createOneOrder, getSingleOrder, deleteOneOrder, updateOneOrder } = require('../controllers/orderController');

router.get('/', getAllOrders);
router.get('/:id', getSingleOrder)
router.post('/new', createOneOrder)
router.delete('/:id', deleteOneOrder)
router.put('/edit/:id', updateOneOrder)

module.exports = router;