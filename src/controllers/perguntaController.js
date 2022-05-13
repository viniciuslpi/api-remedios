import perguntas from "../models/Perguntas.js";

class PerguntaController {

    /*

    static listarPerguntasPorParametro = (req, res) => {
        
        const { text } = req;
        
        if(text != null || text != undefined) {
            let duvida = buscaDuvida(text);
            perguntas.findOne({ duvidas:  })
        } else {
            res.status(400).send({ message: `${err.message} - id do item não encontrado.` })
        }


        const {id} = req.params;

        perguntas.findById(id, (err, perguntas) => {
            if(err){
                res.status(400).send({ message: `${err.message} - id do item não encontrado.` })
            } else { 

                perguntas.forEach(objetos => {
                    if(objetos.titulo == buscaDuvida(text)) {
                        res.status(200).send(objetos.titulo);
                    }
                    
                })

                res.status(200).send(perguntas);
            }
        })


            
    function buscaDuvida(param, text){
    
        let vtDuvidasFP = duvidas.farma_popular;
        let matches = [];
    
        let objResposta = [{erro: 'pergunta não encontrada'}];
    
        if(typeof text === 'number'){
            matches = vtDuvidasFP[text];
            if(matches) objResposta = [matches];
        }else{
            const perguntaFormatada = text.toLowerCase().removeAcentoECaracEspeciais();
            const pgFormatada = duvida.pergunta.toLowerCase();
            matches = vtDuvidas.filter(duvida => {return pgFormatada.indexOf(perguntaFormatada) !== -1});
            if(matches.length > 0) {
                objResposta = [];
                for(match of matches) objResposta.push(match);
            }
        }
    
        return objResposta;
    
    }

      

    }     */

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