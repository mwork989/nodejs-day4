// intent: to showcase that an api call can be made with request package in express route

const express = require('express');
const fs = require('fs');
const requestObjectTP = require('request');

const app = express();


// index route
app.get('/',(request,response)=>{
    response.send("hello from node js day 4 class")
})

app.get('/getEmployees',(request,response)=>{
    //third party server url which has additional details which our app dont want
    const url = 'http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees';

    requestObjectTP(url,{json:true},(err,res,body)=>{
        if(err){
         console.log("unable to connect to the server");
        }else if(res.body.err){
            console.log("server related error");
        }else{
            let currentEmployees= [];
            console.log("api returned body",body)
            for (let index = 0; index < body.length; index++) {
                
                const employee ={
                    name:body[index].name,
                    createdAt:body[index].createdAt
                }
                currentEmployees.push(employee)
            }
            response.send(currentEmployees)
        }
    })
})


app.listen(3001,()=>{
  console.log("server running at port 3001");
})