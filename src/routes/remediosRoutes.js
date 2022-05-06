import express from "express";
import RemedioController from "../controllers/remedioController.js";

const router = express.Router();

router
    .get('/remedios',        RemedioController.listarRemedios)
    .get('/remedios/:id',    RemedioController.listarRemedioPorId)
    .post('/remedios',       RemedioController.cadastrarRemedio)
    .put('/remedios/:id',    RemedioController.atualizarRemedio)
    .delete('/remedios/:id', RemedioController.excluirRemedio)

export default router;
