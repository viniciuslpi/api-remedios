import mongoose from "mongoose";

const categoriasSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    descricao: { type: String, required: true }
}, 
{
    versionKey: false
});

const categorias = mongoose.model('categorias', categoriasSchema);

export default categorias;