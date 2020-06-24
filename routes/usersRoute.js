const express = require ('express');
const router = express.Router ();
const usersController = require ('../controllers/usersController');
const {autenticarUsuario, autenticarAdmin} = require ('../middleware/autenticacion');

router.get('/usuarios', autenticarUsuario, usersController.getUsuario);
router.get ('/usuarios/:id_usuario', autenticarUsuario, usersController.getUsuarioId);
router.post('/usuarios', autenticarAdmin, usersController.postUsuario);
router.delete('/usuarios/:id_usuario',autenticarAdmin, usersController.deleteUsuario);
router.post('/login',usersController.loginUsuario);

module.exports = router;

