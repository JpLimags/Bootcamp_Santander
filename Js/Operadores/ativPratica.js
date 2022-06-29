function comparaNumeros (n1, n2){

    const primeiraFrase = firstFrase(num1, num2);
    //const segundaFrase = segundaFrase(num1, num2); 

    return `${primeiraFrase}`;
}


function firstFrase(n1,n2){

    let TrueOrfalse = '';

    (n1 == n2) ? TrueOrfalse = 'iguais' : TrueOrfalse = 'diferentes';

    return `Os valores de ${n1} e ${n2} são ${TrueOrfalse}`
};

function secondFrase(n1,n2){

    let TrueOrfalse = '';

    (n1 == n2) ? TrueOrfalse = 'iguais' : TrueOrfalse = 'diferentes';

    return `Os valores de ${n1} e ${n2} são ${TrueOrfalse}`
};

console.log(comparaNumeros(5,6));

