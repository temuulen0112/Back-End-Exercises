
const request = require('request');
let printFilms = (str, callback) => {
    const myPromise = new Promise((resolve, reject) => {
        request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
            if(response) {
                console.log(str)
                return resolve()
            } else {
                return reject()
            }
        });
    })

    return myPromise;
}

function printAllPromise() {
    printFilms('A', () => {})
        .then(() => {
            return printFilms('B', () => {})
        })
        .then(() => {
            return printFilms('C', () => {})
        })
}
printAllPromise()