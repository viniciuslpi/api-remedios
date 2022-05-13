import mongoose from "mongoose";

const perguntaSchema = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    numero: { type: Number, required: true },
    duvidas:
        [
            {
                titulo: { type: String, required: false },
                descricao: { type: String, required: false }
            }
        ]
},
{
    versionKey: false
});

const perguntas = mongoose.model('perguntas', perguntaSchema);

export default perguntas;
