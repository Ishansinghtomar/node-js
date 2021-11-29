const fs = require("fs")

// fs.readFile("./3.file.js/file.txt", function(err, data){
//     if(err){
  //     throw err
 //  }
 //   console.log(data.toString())
//})

var message="hellllllllllo"
fs.writeFile("./3.file.js/file.txt",message,function err(){

if(err)
console.log(err)
})
fs.appendFile("./3.file.js/file.txt",message,function err(){

    if(err)
    console.log(err)
    })
//var output=fs.readFileSync("./3.file.js/file.txt")
//console.log(output.toString())

//to delete fs.unlink("",)