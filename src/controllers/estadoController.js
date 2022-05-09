import estados from "../models/Estados.js";

class EstadoController {

    static listarEstados = (req, res) => {
        estados.find((err, estados) => {
            res.status(200).json(estados)
        })
    }

    static listarEstadosPorId = (req, res) => {
        const {id} = req.params;

        estados.findById(id)
              .populate('listaRemedios', 'nome')
              .exec((err, estados) => {
            if(err){
                res.status(400).send({ message: `${err.message} - id do item não encontrado.` })
            } else { 
                res.status(200).send(estados);
            }
        })
    }

    static cadastrarEstado = (req, res) => {
        let estado = new estados(req.body);

        estado.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar novo item.` })
            } else {
                res.status(201).send(estado.toJSON());
            }
        })
    }

    static atualizarEstado = (req, res) => {
        const { id } = req.params;

        estados.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Dados atualizados com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        });
    }

    static excluirEstado = (req, res) => {
        const { id } = req.params;

        estados.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: `Item excluído com sucesso.` })
            } else {
                res.status(500).send({ message: `${err.message} - Não foi possível excluir o item.` })
            }
        })
    }
}

export default EstadoController;