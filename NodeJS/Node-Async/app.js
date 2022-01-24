const fs = require('fs')
const request = require('request');


request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
    if(error) {
        console.error(`Could not send request to API: ${error.message}`);
        return 
    }

    if(response.statusCode != 200) {
        console.error(`Expected status code 200 but received ${response.statusCode}.`);
        return
    }

    console.log(str)
});
function printAll(str) {
    printFilms('A');
    printFilms('B');
    printFilms('C');
    console.log(str)
}
printAll(str)