//criando a classe
class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

//instanciando e guardando em uma variável
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "ricardo";
cliente1.cpf = 11122211107;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 22211122204;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);

