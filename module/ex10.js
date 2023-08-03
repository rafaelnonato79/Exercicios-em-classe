export class Paciente{
    nome;
    idade;
    doenca;

    constructor(nome,idade,doenca){
        this.nome = nome;
        this.idade = idade;
        this.doenca = doenca;
    }

    descreverPaciente(){
        return `Paciente: ${this.nome}\nIdade: ${this.idade}\nDoença: ${this.doenca}`
    }
}