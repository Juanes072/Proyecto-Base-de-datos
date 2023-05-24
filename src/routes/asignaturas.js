const express = require('express');
const asignaturasController = require('../controllers/asignaturasController');

const router = express.Router();

router.get('/asignaturas', asignaturasController.asignaturas);
router.get('/crearAsignaturas', asignaturasController.crearAsignaturas);
router.get('/verAsignaturas', asignaturasController.verAsignaturas);
router.post('/crearAsignaturas',asignaturasController.subirAsignaturas);
router.post('/asignaturas/eliminar', asignaturasController.destroy);
router.get('/asignaturas/editar/:codigo',asignaturasController.edit);
router.post('/asignaturas/editar/:codigo', asignaturasController.update);

module.exports = router;