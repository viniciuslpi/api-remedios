import mongoose from "mongoose";

const farmaciasSchema = new mongoose.Schema({
    id: { type: String }, 
    nome: { type: String, required: true },
    endereco: { type: String, required: true }, 
    listaRemedios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'remedios', required: true }]
}, 
{
    versionKey: false
});

const farmacias = mongoose.model('farmacias', farmaciasSchema);

export default farmacias;