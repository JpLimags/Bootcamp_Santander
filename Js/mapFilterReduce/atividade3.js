function filterPares(arr){

    return arr.filter(callback);
}

function callback(item){

    return item % 2 === 0;
} 

const arr1 = [8,6,7,15,37,8,12,15,1];

console.log(filterPares(arr1));