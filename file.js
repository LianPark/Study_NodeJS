/*
    Node.js에서 파일 입출력을 테스트함.

    동기식: readFileSync, writeFileSync
    비동기식: readFile, writeFile
    , 스트림방식

*/

const fs = require('fs')

const fileName = "test.txt"
var data = '1234567890\n'

/* 
    비동기식 파일 처리
*/
fs.writeFile(fileName, data, {encoding:'utf8',flag:'a+'}, (err) => {
    if (err) {
        console.log('Error: ' + err);
    } else {
        console.log('The file has been saved!\n'+ data);
    }
});

fs.readFile(fileName, 'utf-8', function(err, data){
    if (err){
        console.log(err);
    } else {
        console.log('read data from file!\n'+ data);
    }
})

// 동기식이 먼저 출력됨.
var output = fs.readFileSync('README.md', 'utf-8');
console.log('readSync: %s', output)
