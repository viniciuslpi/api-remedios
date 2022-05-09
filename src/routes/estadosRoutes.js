import express from "express";
import EstadoController from "../controllers/estadoController.js"

const router = express.Router();

router
    .get('/estados',        EstadoController.listarEstados)
    .get('/estados/:id',    EstadoController.listarEstadosPorId)
    .post('/estados',       EstadoController.cadastrarEstado)
    .put('/estados/:id',    EstadoController.atualizarEstado)
    .delete('/estados/:id', EstadoController.excluirEstado)

export default router;
