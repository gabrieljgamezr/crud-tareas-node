const express = require('express');
const tarea = require('../controllers/tarea');

const routes = express.Router();

routes.get('/tareas', tarea.index);
routes.get('/crear', tarea.crear);

module.exports = routes;