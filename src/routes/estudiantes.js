const express = require('express');
const estudiantesController = require('../controllers/estudiantesController');

const router = express.Router();

router.get('/estudiantes', estudiantesController.estudiantes);
router.get('/crearEstudiantes', estudiantesController.crearEstudiantes);
router.get('/verEstudiantes', estudiantesController.verEstudiantes);
router.post('/crearEstudiantes',estudiantesController.subirEstudiante);
router.post('/estudiantes/eliminar', estudiantesController.destroy);
router.get('/estudiantes/editar/:documento',estudiantesController.edit);
router.post('/estudiantes/editar/:documento', estudiantesController.update);

module.exports = router;