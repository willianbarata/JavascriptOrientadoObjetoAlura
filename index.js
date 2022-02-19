//criando a classe
class Cliente{
    nome;
    cpf;
    
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(saldo){
        if(this.saldo >= saldo){
            this.saldo -= saldo;
        }
    }

}

//instanciando e guardando em uma variável
const cliente1 = new Cliente();
cliente1.nome = "ricardo";
cliente1.cpf = 11122211107;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22211122204;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 200;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(300);
console.log(contaCorrenteRicardo.saldo);

console.log(cliente1);
console.log(cliente2);

