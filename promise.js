console.log('started');

const f1 = new Promise((resolve,reject)=>{
    if(a==b){
        resolve();
    }else{
        reject();
    }
})


// promise chaininng
f1.then(()=>{
    return 1    
}).then((value)=>{
    throw new Error("error occured");
    setTimeout(()=>{
        console.log("1 second");
    },value *1000)
    return 2
}).then((value)=>{
    setTimeout(()=>{
        console.log("2 second");
    },value *1000)
    return 3
}).then((value)=>{
    setTimeout(()=>{
        console.log("3 second");
    },value *1000)
    return 4
}).catch((err)=>{
    console.log(err);
})
console.log('stopped');