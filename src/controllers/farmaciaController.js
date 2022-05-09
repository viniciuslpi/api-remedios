import farmacias from "../models/Farmacias.js";

class FarmaciaController {

    static listarFarmacias = (req, res) => {
        farmacias.find((err, farmacias) => {
            res.status(200).json(farmacias);
        });
    }

    static listarFarmaciasPorId = (req, res) => {
        const { id } = req.params;

        farmacias.findById(id)
                    .populate('listaRemedios', 'nome')
                    .exec((err, farmacias) => {
            if(err){
                res.status(400).send({ message: `${err.message} - Id não encontrado.` })
            } else { 
                res.status(200).send(farmacias);
            }
        })
    }

    static cadastrarFarmacia = (req, res) => {
        let farmacia = new farmacias(req.body);

        farmacia.save((err) => {
            if(err){
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar novo item.`})
            } else {
                res.status(201).send(farmacia.toJSON());
            }
        })
    }

    static atualizarFarmacia = (req, res) => {
        const {id} = req.params;

        farmacias.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err){
                res.status(200).send({ message: 'Dados atualizados com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        });
    } 

    static excluirFarmacia = (req, res) => {
        const {id} = req.params;

        farmacias.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({ message: `Item excluído com sucesso.` })
            } else { 
                res.status(500).send({ message: `${err.message} - Não foi possível excluir o item.`})
            }
        })
    }

}

export default FarmaciaController;