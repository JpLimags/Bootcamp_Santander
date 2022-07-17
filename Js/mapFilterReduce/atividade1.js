const maca = {
    value: 2,
}

const orange = {

    value: 3,
}


function mapThis(arr, thisArg){

    return arr.map(function (item){

       return item * this.value;
    }, thisArg);
}

const nums = [1,2];

console.log('this -> maca', mapThis(nums, maca));
console.log('this -> orange', mapThis(nums, orange));