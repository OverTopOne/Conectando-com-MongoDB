import React, { useEffect, useState } from 'react';
import ControleLivros from './controle/ControleLivros';

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivros = new ControleLivros();

  useEffect(() => {
    const obterTodos = async () => {
      const livrosObtidos = await controleLivros.obterLivros();
      setLivros(livrosObtidos);
      setCarregado(true);
    };
    obterTodos();
  }, []);

  const excluirLivro = async (codigo) => {
    const sucesso = await controleLivros.excluir(codigo);
    if (sucesso) {
      setLivros(livros.filter(livro => livro._id !== codigo));
    }
    setCarregado(false);
  };

  return (
    <div>
      {livros.map((livro, index) => (
        <LinhaLivro key={index} livro={livro} excluirLivro={excluirLivro} />
      ))}
    </div>
  );
};

const LinhaLivro = ({ livro, excluirLivro }) => {
  return (
    <div>
      <h3>{livro.titulo}</h3>
      <p>{livro.autor}</p>
      <p>{livro.editora}</p>
      <p>{livro.resumo}</p>
      <button onClick={() => excluirLivro(livro._id)}>Excluir</button>
    </div>
  );
};

export default LivroLista;
