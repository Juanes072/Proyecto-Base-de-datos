const express = require('express');
const institucionController = require('../controllers/institucionController');

const router = express.Router();

router.get('/instituciones', institucionController.instituciones);
router.get('/crearInstituciones', institucionController.crearInstituciones);
router.get('/verInstituciones', institucionController.verInstituciones);
router.post('/crearInstituciones',institucionController.subirInstituciones);
router.post('/instituciones/eliminar', institucionController.destroy);
router.get('/instituciones/editar/:id',institucionController.edit);
router.post('/instituciones/editar/:id', institucionController.update);

module.exports = router;