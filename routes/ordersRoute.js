const express = require ('express');
const router = express.Router ();
const ordersController = require ('../controllers/ordersController');
const {autenticarUsuario, autenticarAdmin} = require ('../middleware/autenticacion');

router.get('/pedidos', autenticarAdmin, ordersController.getOrders);
router.get('/pedidos/:id_pedido', autenticarUsuario, ordersController.getOrdersId);
router.post('/pedidos', autenticarUsuario, ordersController.postOrders);
router.delete('/pedidos/:id_pedido', autenticarAdmin, ordersController.deleteOrders);
router.patch('/pedidos/:id_pedido', autenticarAdmin, ordersController.updateOrders);

module.exports = router;