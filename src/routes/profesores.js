const express = require('express');
const profesoresController = require('../controllers/profesoresController');

const router = express.Router();

router.get('/profesores', profesoresController.profesores);
router.get('/crearProfesores', profesoresController.crearProfesores);
router.get('/verProfesores', profesoresController.verProfesores);
router.post('/crearProfesores',profesoresController.subirProfesor);
router.post('/profesores/eliminar', profesoresController.destroy);
router.get('/profesores/editar/:documento',profesoresController.edit);
router.post('/profesores/editar/:documento', profesoresController.update);

module.exports = router;