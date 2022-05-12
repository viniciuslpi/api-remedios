import express from "express";
import PerguntaController from "../controllers/perguntaController.js";

const router = express.Router();

router
    .get('/perguntas',        PerguntaController.listarPerguntas)
    .get('/perguntas/:id',    PerguntaController.listarPerguntaPorId)
    .post('/perguntas',       PerguntaController.cadastrarPergunta)
    .put('/perguntas/:id',    PerguntaController.atualizarPergunta)
    .delete('/perguntas/:id', PerguntaController.excluirPerguntas)

export default router;
