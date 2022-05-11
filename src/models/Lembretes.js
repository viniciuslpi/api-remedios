import mongoose from "mongoose";

const lembreteSchema = new mongoose.Schema({
    id: { type: String },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required: true },
    descricao: { type: String, required: true },
    horarios: [{ type: Date, required: true }]
},
{
    versionKey: false
});

const lembretes = mongoose.model('lembretes', lembreteSchema);

export default lembretes;