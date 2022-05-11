import express from "express";
import LembreteController from "../controllers/lembreteController.js";

const router = express.Router();

router
    .get('/lembretes',        LembreteController.listarLembretes)
    .get('/lembretes/:id',    LembreteController.listarLembretePorId)
    .post('/lembretes',       LembreteController.cadastrarLembrete)
    .put('/lembretes/:id',    LembreteController.atualizarLembrete)
    .delete('/lembretes/:id', LembreteController.excluirLembrete)

export default router;
