let Display = (f)=>{
    console.log(f);
}
let higherOrderFun = (a,b,c)=>{
    const details = `my name is ${a} I read in class ${b}`;
    c(details)
}
higherOrderFun('ma', 11, Display)