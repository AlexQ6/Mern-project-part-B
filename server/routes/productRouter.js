const router = require('express').Router();
const { getAllProducts, createOneProduct, getSingleProduct, deleteOneProduct, updateOneProduct } = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/:id', getSingleProduct)
router.post('/new', createOneProduct)
router.delete('/:id', deleteOneProduct)
router.put('/edit/:id', updateOneProduct)

module.exports = router;