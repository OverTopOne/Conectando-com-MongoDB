
const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  resumo: String,
});

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;
