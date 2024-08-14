let message = true;
let promise =  new Promise((resolve,reject)=>{
    if(message){
        resolve([
            {username: 'mashiur', email:'mashiur@gmail.com'},
            {username: 'rahman', email:'rahman@gmail.com'}
        ])
    }else{
        reject('user is not found')
    }
    
})
promise.then((s)=>{
    console.log(s);
})
promise.catch((error)=>{
    console.log(error);
})