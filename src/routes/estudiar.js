const express = require('express');
const estudiarController = require('../controllers/estudiarController');

const router = express.Router();

router.get('/estudiar', estudiarController.estudiar);
router.get('/crearEstudiar', estudiarController.crearEstudiar);
router.get('/verEstudiar', estudiarController.verEstudiar);
router.post('/crearEstudiar',estudiarController.subirEstudiar);
router.post('/estudiar/eliminar', estudiarController.destroy);
router.get('/estudiar/editar/:estudiante',estudiarController.edit);
router.post('/estudiar/editar/:estudiante', estudiarController.update);

module.exports = router;