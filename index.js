import { Cliente } from "./Cliente.js"; 
import { ContaCorrente } from "./ContaCorrete.js";

//instanciando e guardando em uma variável
const cliente1 = new Cliente();
cliente1.nome = "ricardo";
cliente1.cpf = 11122211107;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22211122204;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(200);
let valorSacado = contaCorrenteRicardo.sacar(100);

console.log(valorSacado);
console.log(contaCorrenteRicardo);