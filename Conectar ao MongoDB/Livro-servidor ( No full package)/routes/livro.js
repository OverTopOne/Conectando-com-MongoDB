
const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  try {
    const livros = await livroDao.obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    const novoLivro = await livroDao.incluir(livro);
    res.status(201).json(novoLivro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const codigo = req.params.id;
    const resultado = await livroDao.excluir(codigo);
    if (resultado.deletedCount === 0) {
      res.status(404).json({ message: 'Livro não encontrado' });
    } else {
      res.status(200).json({ message: 'Livro excluído com sucesso' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
