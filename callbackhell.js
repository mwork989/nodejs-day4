function delay(seconds, cb){
    setTimeout(cb,seconds*1000)
}

console.log("start")

delay(2  ,()=>{
    console.log("2 seconds");
    delay(1,()=>{
        console.log("3 seconds");
        delay(1,()=>{
            console.log("4 seconds");
        })
    })
    
})

console.log("end")