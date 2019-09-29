/*
    HTTP 모듈을 이용한 간단한 웹서버 테스트
*/

var http = require('http'); // http 모듈 가져오기

var hostname = '127.0.0.1';
var port = '8080';

// 웹서버 만들기
var server = http.createServer( function(requrest, response){
    response.statusCode = 200;
    response.setHeader('content-type', 'text/plain');
    //response.writeHead(200, {'content-type':'text/html'});
    response.end('Hello Node.js!')
});

// 요청대기 상태
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});