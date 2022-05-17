import mongoose from "mongoose";

const remediosSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String },
    descricao: { type: String, required: true },
    dosagem: { type: String, required: true },
    farmacias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'farmacias', required: true }],
    categorias: { type: mongoose.Schema.Types.ObjectId, ref: 'categorias', required: true },
    estados: [{ type: mongoose.Schema.Types.ObjectId, ref: 'estados', required: true }]
},
{
    versionKey: false
}
);

const remedios = mongoose.model('remedios', remediosSchema);

export default remedios;