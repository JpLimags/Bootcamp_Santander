function calcIdade(anos){

    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade`;
}

const people1 = {

    nome: "Fernando",
    idade: 30
};

const people2 = {

    nome: "Marcela",
    idade: 30
};

const people3 = {

    nome: "Yuri",
    idade: 30
};

console.log(calcIdade.call(people2, 10))