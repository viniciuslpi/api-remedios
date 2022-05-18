import express from "express";
import remedios from "./remediosRoutes.js";
import farmacias from "./farmaciasRoutes.js";
import categorias from "./categoriasRoutes.js";
import estados from "./estadosRoutes.js";
import usuarios from "./usuariosRoutes.js";
import lembretes from "./lembretesRoutes.js";
import perguntas from "./perguntasRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({
            titulo: 'Api de Remédios',
            descricao: 'Banco de dados desenvolvido para armazenar dados do Assistente Virtual Remedinho.',
            rotas: [
                '/farmacias',
                '/perguntas',
                '/remedios',
            ]
        });
    })

    app.use(
        express.json(),
        remedios,
        farmacias,
        categorias,
        estados,
        usuarios,
        lembretes,
        perguntas
    )
}

export default routes;