const request = require('request');
let printFilms = (str, callback) => {
    request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
        console.log(str)
        return callback()
    });
}

function printAllCallback() {
    printFilms('A', ()=> {
        printFilms('B', () => {
            printFilms('C', () => {
            });
        });
    });
}
printAllCallback()