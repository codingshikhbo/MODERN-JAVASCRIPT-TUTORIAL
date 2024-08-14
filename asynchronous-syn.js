let myFunc1 = () => {
    console.log('a');
}
let loadingData = () => {
    console.log('b');

}
let myFunc2 = () => {
    setTimeout(loadingData, 3000)
}
let myFunc3 = () => {
    console.log('c');
}
let myFunc4 = () => {
    console.log('d');
}

myFunc1()
myFunc2()
myFunc3()
myFunc4()