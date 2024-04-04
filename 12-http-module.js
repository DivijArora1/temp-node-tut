const http = require('http')

const server = http.createServer((req,res)=>{
   
    // res.write('Welcome to our home page')

    if(req.url === '/'){
        res.end("here is our home section")
    }
    
    
    if(req.url === '/about'){
        res.end("here is our about section")
    }
    

    res.end(`
    <h1>Page not found</h1>
    <a href='/'>go back</a>
    `)

})

server.listen(5000)//listening to portNo.
//it keeps on listening