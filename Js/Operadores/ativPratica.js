function comparaNumeros (n1, n2){

    const primeiraFrase = firstFrase(n1, n2);
    const segundaFrase = secondFrase(n1, n2); 

    return `${primeiraFrase} ${segundaFrase}`;
}


function firstFrase(n1,n2){

    let TrueOrfalse = '';

    (n1 == n2) ? TrueOrfalse = 'iguais' : TrueOrfalse = 'diferentes';

    return `Os valores de ${n1} e ${n2} são ${TrueOrfalse}`;
};


function secondFrase(n1,n2){

    var comp10 = 'menor';
    var comp20 = 'menor';

    if((n1+n2) > 10){

        comp10 = 'maior';
    }

    if((n1+n2) > 20){

        comp20 = 'maior'
    }

    return `Sua soma ${n1+n2}, é ${comp10} que 10, e ${comp20} que 20`;
};


console.log(comparaNumeros(5,10));