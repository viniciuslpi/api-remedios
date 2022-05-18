import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://deploy:upload@node-cluster.xyldt.mongodb.net/api-remedios');

let db = mongoose.connection;

export default db;