const request = require('request');

function printFilms(str, callback) {
   return new Promise((resolve, reject) => {
       request('https://ghibliapi.herokuapp.com/films', (error, response, body) => {
           if(response) {
               console.log(str)
               return resolve()
           } else {
               return reject()
           }
       })
   })
}

async function printAllAsyncs() {
    await printFilms('a', () => {});
    await printFilms('b', () => {});
    await printFilms('c', () => {});
}
printAllAsyncs();