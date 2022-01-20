let http = require('http');
let url = require('url');

let server = http.createServer(function(request, response){
    var cookies = request.headers.cookie;
    if(!cookies) {
        var cookieText = 'MUAHAHHA GG BOOM';
        response.setHeader('Set-Cookie', cookieText);
        console.log('cookie text nemchii!!!');
        return response.end();
    } else {
        console.log(cookies);
        console.log('WHAHHAHAH');
    }

    return response.end("Cookie set: " + cookies.toString());
}).listen(3000)