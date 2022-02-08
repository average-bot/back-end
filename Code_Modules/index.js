
// import modules
const http = require('http'); // a built in module, does not need to be installed with cli
const url = require('url');

//console.log('http', http);
//console.log('url', url);

const address = 'http://localhost:1337?year=2022&month=February';

//Create Server
http.createServer((request, response) => {//request from server, server sends a response back
    response.writeHead(200, { 'Content-Type': 'text/html' });//200 means OK
    let q = url.parse(request.url, true).query;
    let txt = `${q.year} ${q.month}`; // this grabs the month and year from the Query String
    const split = url.parse(address, true);
    console.log(txt);
    const qData = split.query;
    //console.log(split.search);
    response.write(txt);

    //response.write(q.name);
    //console.log(response);
    response.end();
}).listen(1337);

//http://localhost:1337/?year=2022&month=February