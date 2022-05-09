import express from "express";
import remedios from "./remediosRoutes.js"
import farmacias from "./farmaciasRoutes.js"
import categorias from "./categoriasRoutes.js"
import estados from "./estadosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: 'Api de Remédios' });
    })

    app.use(
        express.json(),
        remedios,
        farmacias, 
        categorias, 
        estados
    )
}

export default routes;