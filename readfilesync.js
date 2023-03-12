const fs= require("fs");

console.log("script started");

try{

    const data = fs.readFileSync("test.txt");
    console.log("file read completed")
}
catch(err){
    console.log(err)
}

console.log("script stopped")


// output
// script started
// file read successfully
// script stopped
