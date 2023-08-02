export class Estudante{
    nome;
    nota1;
    nota2;
    nota3;
    constructor(nome,nota1,nota2,nota3){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    mediaN(){
        this.media = (this.nota1+this.nota2 + this.nota3)/3
    }

}