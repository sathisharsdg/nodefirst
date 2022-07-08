const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome Home");
    }
    if(req.url === "/about"){
        res.end("Hi im about");
    }
    res.end(
        `<h1> oops...</h1> 
        go to home <a href="/">Home</a>`
    )
    
})

const port = server.listen(3000);
console.log("listening at ", port);