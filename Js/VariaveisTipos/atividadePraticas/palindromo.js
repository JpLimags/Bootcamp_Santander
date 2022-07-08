//Primeiro metodo

function VerificarPalindromo(string){

    if(!string) return "string inexistentes";

    return string.split("").reverse().join("") === string;
}


//Segundo Metodo

function VerificarPalindromo2(string){

    if(!string) return "string inexistentes";

    for(let i = 0; i < string.length / 2; i++){

        if(string[i] !== string[string.length - 1 - i]){

            return false;
        }
    }

    return true;
}

console.log(VerificarPalindromo2("Jumento"))