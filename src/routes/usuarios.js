const express = require('express');
const usuariosController = require('../controllers/usuariosControllers');

const router = express.Router();

router.get('/usuarios', usuariosController.usuarios);
router.get('/crearUsuarios', usuariosController.crearUsuarios);
router.get('/verUsuarios', usuariosController.verUsuarios);
router.post('/crearUsuarios',usuariosController.subirUsuarios);
router.post('/usuarios/eliminar', usuariosController.destroy);
router.get('/usuarios/editar/:usuario',usuariosController.edit);
router.post('/usuarios/editar/:usuario', usuariosController.update);

module.exports = router;