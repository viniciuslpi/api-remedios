import remedios from '../models/Remedios.js';

class RemedioController{
    
    static listarRemedios = (req, res) => {
        remedios.find((err, remedios) => {
            res.status(200).json(remedios)
        })
    }   

    static listarRemedioPorId = (req, res) => {
        const {id} = req.params;

        remedios.findById(id)
              .populate('farmacias', 'nome')
              .populate('categorias', 'nome')
              .populate('estados', 'nome')
              .exec((err, remedios) => {
            if(err){
                res.status(400).send({ message: `${err.message} - id do item não encontrado.` })
            } else { 
                res.status(200).send(remedios);
            }
        })
    }

    static cadastrarRemedio = (req, res) => {
        let remedio = new remedios(req.body);

        remedio.save((err) => {
            if(err){
                res.status(500).send({ message: `${err.message} - falha ao cadastrar novo item.`})
            } else {
                res.status(201).send(remedio.toJSON());
            }
        })
    }

    static atualizarRemedio = (req, res) => {
        const {id} = req.params;

        remedios.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err){
                res.status(200).send({ message: 'Remédio atualizado com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        });
    } 

    static excluirRemedio = (req, res) => {
        const {id} = req.params;

        remedios.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({ message: `Item excluído com sucesso.` })
            } else { 
                res.status(500).send({ message: `${err.message} - Não foi possível excluir o item.`})
            }
        })
    }


    /* EXEMPLO BUSCA POR CATEGORIA
    
    static listarLivrosPorEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({ 'editora': editora }, {}, (err, livros) => { 
            res.status(200).send(livros);
        })
    }*/

}

export default RemedioController;
