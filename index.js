import { Cliente } from "./Cliente.js"; 
import { ContaCorrente } from "./ContaCorrete.js";

//instanciando e guardando em uma variável
const cliente1 = new Cliente("Ricardo", 11122211107);
const cliente2 = new Cliente("Alice",22211122204 );

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);

let valor = 200;
conta1.transferir(valor, conta2);

console.log("valor: ", valor);
console.log(conta1);
console.log(conta2);

