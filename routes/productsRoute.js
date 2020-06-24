const express = require ('express');
const router = express.Router ();
const productsController = require ('../controllers/productsController');
const {autenticarUsuario, autenticarAdmin} = require ('../middleware/autenticacion');

router.get('/productos', autenticarUsuario, productsController.getProducts);
router.get ('/productos/:id_producto', autenticarUsuario, productsController.getProductsId);
router.post('/productos', autenticarAdmin, productsController.postProducts);
router.delete('/productos/:id_producto', autenticarAdmin, productsController.deleteProducts);
router.patch('/productos/:id_producto', autenticarAdmin, productsController.updateProducts);
module.exports = router;

