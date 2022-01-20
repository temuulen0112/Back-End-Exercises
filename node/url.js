let url = require('url');
let address = 'https://meet.google.com/wfq-fvxq-mho';
let parse = url.parse(address, true)

console.log(parse.host);
console.log(parse.pathname);
console.log(parse.search);
