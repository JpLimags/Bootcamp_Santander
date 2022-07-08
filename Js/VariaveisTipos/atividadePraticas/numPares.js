
function verificPar(array){

    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){

        if(array[i] % 2 === 0){
            console.log(`Substituindo o valor par ${array[i]}, por 0`)
            array[i] = 0;
        }
    }

    console.log("Array final:")
    return array;
}

console.log(verificPar([5,8,9,10,13,44]))