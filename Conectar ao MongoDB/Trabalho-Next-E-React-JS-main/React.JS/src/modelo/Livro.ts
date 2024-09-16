export class Livro {
    id: string;
    titulo: string;
    autor: string;
    editora: string;
    resumo?: string;
  
    constructor(id: string, titulo: string, autor: string, editora: string, resumo?: string) {
      this.id = id;
      this.titulo = titulo;
      this.autor = autor;
      this.editora = editora;
      this.resumo = resumo;
    }
  }
  