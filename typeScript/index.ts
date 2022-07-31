/*function soma(a: number, b: number){

    return a + b;
}

console.log(soma(5, 4));*/


//types
//interfaces

interface Animal{

    nome: string;
    tipo: 'terrestre' | "aquatico";
    exeRugido(heightDecibeis: number): void,
}

interface Felino extends  Animal{

    visaoNoturna: boolean;
}

const animal: Animal = {

    nome: 'gato',
    tipo: 'terrestre',
    exeRugido: (heightDecibeis) => (`${heightDecibeis}`)
}

