const fs = require('fs')
console.log('Before')
fs.readFile('/Users/mstars_lab1_07/Desktop', function (error, data) {
    console.log('** During!!! **')
})
console.log('After')
