var http = require('http');
http.request({
    host: '52.221.191.153',
    method: 'GET',
    path: '/api/foods'
}, function(response) {
    response.setEncoding("utf8");
    response.on("readable", function() {
        console.log(JSON.parse(response.read()))
    })
}).end();