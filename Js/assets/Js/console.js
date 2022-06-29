// Exemplo de funsção para verificar se o número é par ou ímpar



function returnEvenValues(array){

    let evenNumbers = [];

    for(let i = 0; i < array.length; i++){

        if(array[i] % 2 === 0){

            evenNumbers.push(array[i]);
        }else{

            console.log(`${array[i]} não é par`);
        }
    }

    console.log("Os números pares são:");
    console.log(evenNumbers);
}

let array = [10, 12, 17, 1, -2, 83];


returnEvenValues(array);