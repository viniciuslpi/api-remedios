import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://robert:123@node-cluster.xyldt.mongodb.net/api-remedios');

let db = mongoose.connection;

export default db;