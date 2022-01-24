const request = require('request');
let printFilms = () => {
    return
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