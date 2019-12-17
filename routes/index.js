var express = require('express');
var router = express.Router();

const kalimaController = require('../controllers/kalimaController.js');

router.get('/', kalimaController.main)
router.get('/projects', kalimaController.list);
router.get('/projects/create', kalimaController.create);
router.post('/projects/create', kalimaController.save);
router.get('/projects/delete/:id', kalimaController.delete);
router.get('/projects/update/:id', kalimaController.edit);
router.post('/projects/update/:id', kalimaController.update);

router.get('/projects/createtask/:id', kalimaController.createTask)
router.post('/projects/createtask/:id', kalimaController.saveTask)
router.get('/projects/task/:id', kalimaController.showtask)
router.get('/projects/task/edit/:id', kalimaController.editTask)
router.post('/projects/task/update/:id', kalimaController.updateTask)
router.get('/projects/task/delete/:id', kalimaController.deleteTask)
router.get('/proyectos', kalimaController.proyectos)
router.get('/servicios', kalimaController.servicios)
router.get('/estudio', kalimaController.estudio)
router.get('/contacto', kalimaController.contacto)
module.exports = router;