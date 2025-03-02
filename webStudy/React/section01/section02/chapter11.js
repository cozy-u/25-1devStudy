//동기
console.log(1);
console.log(2);

//비동기
console.log(1);
setTimeout(()=>{console.log(2)},3000); //3000ms 이후에 콜백함수 내용이 실행됨
console.log(3);