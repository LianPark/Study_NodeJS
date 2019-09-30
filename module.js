/*
    모듈의 사용법을 익히기
*/
var sum = function(a,b){
    return a+b
};
console.log(sum(10,11))


// 외부 모듈 가져오기
var cal = require('./sum');
console.log(cal.sum(1,2))
console.log(cal.avg(1,2))