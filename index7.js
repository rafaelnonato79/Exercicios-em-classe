import { ContaBancaria } from "./module/ex07.js";

const contaRafael = new ContaBancaria("Rafael",2000);
console.log(contaRafael);
contaRafael.depositar(500);
console.log(contaRafael);
contaRafael.sacar(100);
console.log(contaRafael);

const contaPedro = new ContaBancaria("Pedro",1000);

contaRafael.transferir(contaPedro,50);

console.log(contaRafael);
console.log(contaPedro);
