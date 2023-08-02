export class Livro{
    titulo;
    autor;
    anoPublicacao;
    genero;

    constructor(titulo, autor, anoPublicacao, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }

    descreverLivro(){
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}, Genero: ${this.genero}`)
    }
}