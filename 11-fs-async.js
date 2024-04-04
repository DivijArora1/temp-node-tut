const { readFile,writeFile} = require('fs')

console.log("Start")
readFile('./content/first.txt','utf8',(err,res)=>{
    if(err){//if we get an error
        console.log(err)
        return
    }
    // console.log(res)
    const first = res
    readFile('./content/subfolder/test.txt',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        // console.log(res)
        const second = result
        writeFile('./content/result-async.txt',`Hello beta`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("Done with this task")
        }
        )
    })
})

console.log("starting next task")


