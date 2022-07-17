//Função sem a utilização do this

function map(arr){

    return arr.map(function (item){

        return item * 2;
    });

}

const num =  [2,4,5,8,22];

console.log(map(num));