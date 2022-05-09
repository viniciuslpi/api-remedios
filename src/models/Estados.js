import mongoose from "mongoose";

const estadosSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    sigla: { type: String, required: true },
    listaRemedios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'remedios', required: true }]
}, 
{
    versionKey: false
});

const estados = mongoose.model('estados', estadosSchema);

export default estados;
