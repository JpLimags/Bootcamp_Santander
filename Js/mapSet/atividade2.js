let arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valUnic(arr){

    const setUnic = new Set(arr);

    return [...setUnic];
}

console.log(valUnic(arr));