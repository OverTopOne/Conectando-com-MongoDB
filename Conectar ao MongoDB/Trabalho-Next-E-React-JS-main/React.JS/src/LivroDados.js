import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/ControleLivros';

const LivroDados = () => {
  const [livro, setLivro] = useState({ titulo: '', autor: '', editora: '', resumo: '' });
  const controleLivros = new ControleLivros();
  const navigate = useNavigate();

  const incluirLivro = async () => {
    const sucesso = await controleLivros.incluir(livro);
    if (sucesso) {
      navigate('/');
    }
  };

  return (
    <div>
      <input type="text" value={livro.titulo} onChange={(e) => setLivro({ ...livro, titulo: e.target.value })} placeholder="Título" />
      <input type="text" value={livro.autor} onChange={(e) => setLivro({ ...livro, autor: e.target.value })} placeholder="Autor" />
      <input type="text" value={livro.editora} onChange={(e) => setLivro({ ...livro, editora: e.target.value })} placeholder="Editora" />
      <input type="text" value={livro.resumo} onChange={(e) => setLivro({ ...livro, resumo: e.target.value })} placeholder="Resumo" />
      <button onClick={incluirLivro}>Incluir Livro</button>
    </div>
  );
};

export default LivroDados;
