import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://vini:123@node-cluster.xyldt.mongodb.net/api-remedios');


let db = mongoose.connection;

export default db;