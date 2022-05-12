import perguntas from "../models/Perguntas.js";

class PerguntaController {

    static listarPerguntas = (req, res) => {
        perguntas.find((err, perguntas) => {
            res.status(200).json(perguntas)
        })
    }

    static listarPerguntaPorId = (req, res) => {
        const {id} = req.params;

        perguntas.findById(id, (err, perguntas) => {
            if(err){
                res.status(400).send({ message: `${err.message} - id do item não encontrado.` })
            } else { 
                res.status(200).send(perguntas);
            }
        })
    }

    static cadastrarPergunta = (req, res) => {
        let pergunta = new perguntas(req.body);

        pergunta.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar novo item.` })
            } else {
                res.status(201).send(pergunta.toJSON());
            }
        })
    }

    static atualizarPergunta = (req, res) => {
        const { id } = req.params;

        perguntas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Dados atualizados com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        });
    }

    static excluirPerguntas = (req, res) => {
        const { id } = req.params;

        perguntas.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: `Item excluído com sucesso.` })
            } else {
                res.status(500).send({ message: `${err.message} - Não foi possível excluir o item.` })
            }
        })
    }
}

export default PerguntaController;