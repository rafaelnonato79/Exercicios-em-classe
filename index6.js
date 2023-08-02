import { Banco } from "./module/ex06.js";

const meuBanco = new Banco("Rafael");
meuBanco.adicionarConta(555);
meuBanco.adicionarConta(5341);
meuBanco.adicionarConta(1234);
meuBanco.adicionarConta(85410);
meuBanco.removerConta(5341);

console.log(meuBanco);