export class Banco{
    nome;
    contas=[];
    indice;
    constructor(nome){
        this.nome=nome;
    }

    adicionarConta(conta){
        this.contas.push(conta)
    }

    removerConta(conta){
        this.indice = this.contas.indexOf(conta)
        if(this.indice !== -1){
        this.contas.splice(this.indice,1)
        }
    }

}