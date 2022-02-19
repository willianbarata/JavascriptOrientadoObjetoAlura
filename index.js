//criando a classe
class Cliente{
    nome;
    cpf;
    
}

class ContaCorrente{
    agencia;
    // #saldo = 0; opção para privado
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
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
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(200);
let valorSacado = contaCorrenteRicardo.sacar(100);

console.log(valorSacado);
console.log(contaCorrenteRicardo);