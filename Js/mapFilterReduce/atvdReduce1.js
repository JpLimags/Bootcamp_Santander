function soma(arr){

    return arr.reduce(function(previous, current) {
        return previous + current;
    })
}

const arr = [3,7]

console.log(soma(arr));