const {readFileSync,writeFileSync} = require('fs')

// console.log("start")
//reading
 const first = readFileSync('./content/first.txt','utf8')
 const second = readFileSync('./content/subfolder/test.txt','utf8')

//writing
//creating a file
writeFileSync('./content/result.txt',
`Here is the result ${first} \n
 Here is the second ${second}`,
 {flag: 'a'}//append file
 )
// console.log("Done with this")
// console.log("Startignt the next")


