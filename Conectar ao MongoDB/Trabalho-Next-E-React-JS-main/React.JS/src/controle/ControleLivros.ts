import { Livro } from '../modelo/Livro';


const baseURL = 'http://localhost:3030/livros';

export class ControleLivros {

  public async obterLivros(): Promise<Livro[]> {
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error('Falha ao obter livros');
      }
      const dados = await response.json();
      return dados.map((livro: any) => new Livro(livro._id, livro.titulo, livro.autor, livro.editora, livro.resumo));
    } catch (error) {
      console.error('Erro ao obter livros:', error);
      return [];
    }
  }


  public async incluir(livro: Livro): Promise<boolean> {
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titulo: livro.titulo,
          autor: livro.autor,
          editora: livro.editora,
          resumo: livro.resumo,
        }),
      });
      const resultado = await response.json();
      return resultado.ok;
    } catch (error) {
      console.error('Erro ao incluir livro:', error);
      return false;
    }
  }


  public async excluir(codigo: string): Promise<boolean> {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
      const resultado = await response.json();
      return resultado.ok;
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
      return false;
    }
  }
}
