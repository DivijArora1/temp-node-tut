const path = require('path')

// console.log(path.sep)
const filepath = path.join('/content','/subfolder','test.txt')
console.log(filepath)

const base = path.basename(filepath)
//accest last path ie-test.txt
console.log(base)


//absolute path ie full path
const absolute  = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)
