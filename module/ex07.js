export class ContaBancaria{
    dono;
    saldo;

    constructor(dono,saldo){
        this.dono = dono;
        this.saldo = saldo;
    }

    get dono(){
        return this.dono
    }

    depositar(valor){
       const podeDepositar = valor>0;
        if(podeDepositar){
           this.saldo += valor;
            return true
       } 
       return false;
    }

    sacar(valor){
        const podeSacar = valor<=this.saldo && valor>0 
        if(podeSacar){
            this.saldo -=valor
            return true
        }
        return false
    }

    transferir(contaDestino,valor){
        const podeTransferir = this.sacar(valor);
        if(podeTransferir){
        return contaDestino.depositar(valor);
        }
    }
}