let b = [10,20,30];
let totalb = b.reduce(function(acc, item, index, array){
    return acc + item / array.length;
}, 0);
console.log(totalb);