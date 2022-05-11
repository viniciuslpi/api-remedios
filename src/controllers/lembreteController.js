import lembretes from '../models/Lembretes.js';

class LembreteController{
    
    static listarLembretes = (req, res) => {
        lembretes.find((err, lembretes) => {
            res.status(200).json(lembretes)
        })
    }   

    static listarLembretePorId = (req, res) => {
        const {id} = req.params;

        lembretes.findById(id)
              .populate('usuario', 'nome')
              .exec((err, lembretes) => {
            if(err){
                res.status(400).send({ message: `${err.message} - id do item não encontrado.` })
            } else { 
                res.status(200).send(lembretes);
            }
        })
    }

    static cadastrarLembrete = (req, res) => {
        let lembrete = new lembretes(req.body);

        lembrete.save((err) => {
            if(err){
                res.status(500).send({ message: `${err.message} - falha ao cadastrar novo lembrete.`})
            } else {
                res.status(201).send(lembrete.toJSON());
            }
        })
    }

    static atualizarLembrete = (req, res) => {
        const {id} = req.params;

        lembretes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err){
                res.status(200).send({ message: 'lembrete atualizado com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        });
    } 

    static excluirLembrete = (req, res) => {
        const {id} = req.params;

        lembretes.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({ message: `lembrete excluído com sucesso.` })
            } else { 
                res.status(500).send({ message: `${err.message} - Não foi possível excluir o lembrete.`})
            }
        })
    }

}

export default LembreteController;
