const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);

Promise.all([
    read('test1.txt'),
    read('test2.txt'),
    read('test3.txt')
]).then(
(overalldata) => {
    console.log("overalldata",overalldata)
    // ES5 style of associating data
    // const data1 = overalldata[0];
    // const data2 = overalldata[1];
    // const data3 = overalldata[2];
    // ES6 array destructuring
    const [data1, data2, data3] = overalldata;
    console.log("data1", data1.toString())
    console.log("data2", data2.toString())
    console.log("data3", data3.toString())
}).catch((err) => {
    console.log("error occured", err)

    
})