import express from "express";
import FarmaciaController from "../controllers/farmaciaController";

const router = express.Router();

router
    .get('/farmacias',        FarmaciaController.listarFarmacias)
    .get('/farmacias/:id',    FarmaciaController.listarFarmaciasPorId)
    .post('/farmacias',       FarmaciaController.cadastrarFarmacia)
    .put('/farmacias/:id',    FarmaciaController.atualizarFarmacia)
    .delete('/farmacias/:id', FarmaciaController.excluirFarmacia)

export default router;
