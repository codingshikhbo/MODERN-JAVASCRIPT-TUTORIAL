// let array = [2,3,4,5,6,7];
// let array1 = array.filter(myFunc)

// function myFunc(x){
//     return x<5 ;
// }
// console.log(array1);


let array = [2,3,4,5,6,7];
let array1 = array.filter(x => {
    return x > 3;
})
console.log(array1);