import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router
    .get('/usuarios',        UsuarioController.listarUsuarios)
    .get('/usuarios/:id',    UsuarioController.listarUsuarioPorId)
    .post('/usuarios',       UsuarioController.cadastrarUsuario)
    .put('/usuarios/:id',    UsuarioController.atualizarUsuario)
    .delete('/usuarios/:id', UsuarioController.excluirUsuario)

export default router;
