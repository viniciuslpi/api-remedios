import express from "express";
import remedios from "./remediosRoutes.js"
import farmacias from "./farmaciasRoutes.js"
import categorias from "./categoriasRoutes.js"
import estados from "./estadosRoutes.js";
import usuarios from "./usuariosRoutes.js";
import lembretes from "./lembretesRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: 'Api de Remédios' });
    })

    app.use(
        express.json(),
        remedios,
        farmacias, 
        categorias, 
        estados, 
        usuarios,
        lembretes
    )
}

export default routes;