export class Carro{
    //atributos
    marca;
    modelo;
    ano;

    //constructor
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    //metodos
    detalhesDoCarro(){
        console.log( `Marca:${this.marca}\nModelo:${this.modelo}\nAno:${this.ano}`)
    }
}