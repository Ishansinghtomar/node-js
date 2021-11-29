const http=require('http')
console.log(http)

http.createServer((request,response)=>{
    if(request.url =='/')
    {console.log(request.url)
    }
    else {
    console.log("bad")
    }
    response.writeHead(200,{'content-type':'text/html'})
response.end('hello world')
}).listen(8080)