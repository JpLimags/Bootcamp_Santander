const list = [

    {
        name: 'sabão em pó',
        preço: 17
    },

    {
        name: 'toalha',
        preço: 45
    },

    {
        name: 'cereal',
        preço: 15
    }


]

const saldo = 100;

function calSaldo(saldo, list){

    return list.reduce(function(previous, current){

        return previous - current.preço;
    }, saldo);
}

console.log(`O saldo restante foi R$ ${calSaldo(saldo, list)}`)