/*
    path 모듈의 사용법 및 
*/

var path = require('path')

// dir name 합치기
var directories = ['one','two','three'];
var docsDirectory = directories.join(path.sep)
console.log('문서 디렉토리: %s', docsDirectory)

// 디렉토리 이름과 파일이름 합치기
var curPath = path.join('C:\\Users\\mike','notepad.exe')
console.log('파일 패스: %s', curPath)

// 디렉토리, 파일이름, 확장자 구별
var filename = 'C:\\Users\\mike\\nodepad.exe';
var dirname = path.dirname(filename)
var basename = path.basename(filename)
var extname = path.extname(filename)
console.log('디렉토리: %s, 파일이름: %s, 확장자: %s', dirname, basename, extname)