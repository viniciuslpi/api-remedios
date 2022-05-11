import usuarios from '../models/Usuarios.js';

class UsuarioController{
    
    static listarUsuarios = (req, res) => {
        usuarios.find((err, usuarios) => {
            res.status(200).json(usuarios)
        })
    }   

    static listarUsuarioPorId = (req, res) => {
        const {id} = req.params;

        usuarios.findById(id)
              .populate('localidade', 'nome')
              .populate('lembretes', 'descricao')
              .exec((err, usuarios) => {
            if(err){
                res.status(400).send({ message: `${err.message} - id do item não encontrado.` })
            } else { 
                res.status(200).send(usuarios);
            }
        })
    }

    static cadastrarUsuario = (req, res) => {
        let usuario = new usuarios(req.body);

        usuario.save((err) => {
            if(err){
                res.status(500).send({ message: `${err.message} - falha ao cadastrar novo usuario.`})
            } else {
                res.status(201).send(usuario.toJSON());
            }
        })
    }

    static atualizarUsuario = (req, res) => {
        const {id} = req.params;

        usuarios.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err){
                res.status(200).send({ message: 'Usuario atualizado com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        });
    } 

    static excluirUsuario = (req, res) => {
        const {id} = req.params;

        usuarios.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({ message: `Usuario excluído com sucesso.` })
            } else { 
                res.status(500).send({ message: `${err.message} - Não foi possível excluir o usuario.`})
            }
        })
    }

}

export default UsuarioController;
