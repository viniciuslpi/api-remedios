import categorias from "../models/Categorias";

class CategoriaController {

    static listarCategorias = (req, res) => {
        categorias.find((err, categorias) => {
            if(err) {
                res.status(500).send({ message: `${err.message} - Não foi possível encontrar as categorias`})
            } else {
                res.status(200).json(categorias);
            }
        })
    }

    static listarCategoriasPorId = (req, res) => {
        const { id } = req.params;

        categorias.findById(id, (err, categorias) => {
            if(err){
                res.status(400).send({ message: `${err.message} - Id não encontrado.` })
            } else { 
                res.status(200).send(categorias);
            }
        })
    }

    static cadastrarCategoria = (req, res) => {
        let categoria = new categorias(req.body);

        categoria.save((err) => {
            if(err){
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar novo item.`})
            } else {
                res.status(201).send(categoria.toJSON());
            }
        })
    }

    static atualizarCategoria = (req, res) => {
        const {id} = req.params;

        categorias.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err){
                res.status(200).send({ message: 'Dados atualizados com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        });
    } 

    static excluirCategoria = (req, res) => {
        const {id} = req.params;

        categorias.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({ message: `Item excluído com sucesso.` })
            } else { 
                res.status(500).send({ message: `${err.message} - Não foi possível excluir o item.`})
            }
        })
    }

}

export default CategoriaController;