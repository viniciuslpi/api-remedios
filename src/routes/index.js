import express from "express";
import farmacias from "../models/Farmacias.js";
import remedios from "./remediosRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: 'Api de Remédios' });
    })

    app.use(
        express.json(),
        remedios,
        farmacias
    )
}

export default routes;