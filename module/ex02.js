export class Pessoa{
    //atributos
    #nome;
    #idade;
    #profissao

    constructor(nome,idade,profissao){
        this.#nome = nome;
        this.#idade = idade;
        this.#profissao = profissao;
    }

    //metodos
    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }
    get profissao(){
        return this.#profissao
    }

    apresentacao(){
        console.log(`Olá, meu nome é ${this.#nome}, tenho ${this.#idade} anos e sou ${this.#profissao}`)
    
    }
}