// script will throw error if you run it

const fs= require("fs");

console.log("script started");


// this below code provides a demo on unwanted practice using callbacks
fs.readFile("test.txt", function read1(err,data){
    if(err){
        console.log(err)
    }else{
        fs.readFile("test1.txt", function read2(err1,data1){
            if(err1){
                console.log(err1)
            }else{
                fs.readFile("test1.txt", function read3(err1,data1){
                    if(err1){
                        console.log(err1)
                    }else{
                        fs.readFile("test2.txt", function read4(err1,data1){
                            if(err1){
                                console.log(err1)
                            }else{
                                fs.readFile("test3.txt", function read5(err1,data1){
                                    if(err1){
                                        console.log(err1)
                                    }else{
                                        fs.readFile("test4.txt", function(err1,data1){
                                            if(err1){
                                                console.log(err1)
                                            }else{
                                                fs.readFile("test5.txt", function(err1,data1){
                                                    if(err1){
                                                        console.log(err1)
                                                    }else{
                                                        console.log("file read test1 completed")
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})
console.log("script stopped");

//output
// script started
// file read successfully
// script stopped

// extensive usage of callbacks  lead to two problems - callback hell
// 1. unable to debug which function is throwing error or code maintainance will be challegening - named callbacks
// 2. creates a false sense of heirarchy 
// 3. non unit testable and non resuable