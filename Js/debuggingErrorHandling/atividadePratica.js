function validation(arr, num){

    try{

        if(!arr && !num) throw new ReferenceError("Por favor envie os parâmetros !");

        if(Array.isArray(arr) !== true)
            throw new TypeError("Por favor digite um array do tipo objeto !");
        
        if(typeof num !== 'number')
            throw new TypeError("Por favor digite um valor do tipo number !");

        if(arr.length !== num) throw new RangeError('Tamanho inválido');


    }catch(e){

        if(e instanceof ReferenceError){

            console.log("Este erro é um ReferenceError !");
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Este erro é um TypeError !");
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Este erro é um ReferenceError !");
            console.log(e.message);
        }else{

            console.log("Error inesperado")
        }
    }

    return arr;
}

console.log(validation([],'a'))