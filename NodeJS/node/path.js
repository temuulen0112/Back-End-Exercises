const path = require('path')

const notes = '//Users/mstars_lab1_07/Desktop/test.txt'
console.log(path.dirname(notes));
console.log(path.basename(notes));
console.log(path.extname(notes));
console.log(path.resolve('test.txt'));