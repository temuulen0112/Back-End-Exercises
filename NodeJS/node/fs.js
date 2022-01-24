// const fs = require('fs');
// fs.stat('/Users/mstars_lab1_07/Desktop/test.txt', (err, stats) => {
//     if(err) {
//         console.error(err)
//         return
//     } 
//     console.log(stats)
// }) 



// const fs = require('fs')

// fs.readFile('/Users/mstars_lab1_07/Desktop/test.txt', (err, data) => {
//     if(err) {
//         console.error(err)
//         return
//     } 
//     console.log(data.toString())
// })



// const fs = require('fs')

// const content = 'Some Content!'

// fs.writeFile('/Users/mstars_lab1_07/Desktop/test.txt', content, { flag: 'a+' }, err => {
//     if(err) {
//         console.error(err)
//         return
//     } else {
//         'hi'
//     }
// })



// const fs = require('fs')

// const content = 'BOOM DUUSAAA'

// fs.appendFile('/Users/mstars_lab1_07/Desktop/punpan.txt', content, err => {
//     if(err) {
//         console.error(err)
//         return 
//     } else {
//         console.log('GG')
//     }
// })



// const fs = require('fs')

// const folderName = '/Users/mstars_lab1_07/Desktop/punpan.txt'

// try {
//     if(!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName)
//     }
// } catch (err) {
//     console.error(err)
// }



// const fs = require('fs')
// const path = require('path')
// const folderPath = path.dirname(__dirname)
// console.log(fs.readdirSync(folderPath))



// const fs = require('fs')

// fs.rename('/Users/mstars_lab1_07/Desktop/punpan.txt', '/Users/mstars_lab1_07/Desktop/gg.txt', err => {
//     if(err) {
//         console.error(err)
//         return
//     }
// })



// const fs = require('fs')

// fs.rmdir('/Users/mstars_lab1_07/Desktop/boliyoo', { resolve: true }, (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log(`${'/Users/mstars_lab1_07/Desktop/boliyoo'} is deleted!`)
// })



const fs = require('fs')

fs.rm('/Users/mstars_lab1_07/Desktop/punpan.txt', { recursive: true, force: true }, (err) => {
    if(err) {
        throw err
    } 
    console.log(`${'/Users/mstars_lab1_07/Desktop/punpan.txt'}  is deleted!!!`)
})