import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: { type: String },
    apelido: { type: String, required: false },
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: Object, required: true },
    lembretes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'lembretes', required: true }]
},
{
    versionKey: false
}
);

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;