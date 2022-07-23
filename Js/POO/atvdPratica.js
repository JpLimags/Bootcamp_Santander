class contaBancaria{

    constructor(agencia, numero, tipo){

        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;

    }

    sacar(valor){

        if(valor > this._saldo){

            return console.log("Não é possível realizar o saque\nSaldo insuficiente !")
        }

        this._saldo = this._saldo - valor;
        return this._saldo; 
    } 

    depositar(valor){

        this._saldo = this._saldo + valor;
        return this._saldo;
    }

    set saldo(valor){

        this._saldo = valor;
    }

    get saldo(){

        return this._saldo;
    }
}


class contaCorrente extends contaBancaria{

    constructor (agencia, numero, cartaoCredito){

        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    set cartaoCredito(valor){

        this._cartaoCredito = valor;
    }

    get cartaoCredito(){

        return this_.cartaoCredito;
    }
}

class contaPoupanca extends contaBancaria{

    constructor(agencia, numero){

        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class contaUniversitaria extends contaBancaria{

    constructor(agencia, numero){

        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor){

        if(valor > 500){
            console.log('Você não pode realizar saques maiores do que 500');
        }else{

            this._saldo = this._saldo - valor;
            return this._saldo;
        }
    }
}
