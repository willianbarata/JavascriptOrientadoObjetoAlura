import { Cliente } from "./Cliente.js"; 
import { ContaCorrente } from "./ContaCorrete.js";

//instanciando e guardando em uma variável
const cliente1 = new Cliente();
cliente1.nome = "ricardo";
cliente1.cpf = 11122211107;

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 22211122204;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente();
//conta2.cliente = null;
conta2.cliente = new Cliente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log("valor: ", valor);
console.log(conta2);
//conta2.saldo = 300; método possui apenas getter
console.log(conta2.saldo);
