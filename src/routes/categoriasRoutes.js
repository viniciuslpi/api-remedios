import express from "express";
import CategoriaController from "../controllers/categoriaController.js";

const router = express.Router();

router
    .get('/categorias', CategoriaController.listarCategorias)

export default router;