//1. null 병합 연산자
let var1;   //undefined
let var2=10;
let var3=20;

let var4= var1 ?? var2; //var4에는 undefined이 아닌 var2의 값인 10이 들어감
let var5 = var2 ?? var3; //만약 비교하는 두 변수 중 null이나 undefined인 변수가 없을 경우 먼저 온 변수의 값을 가짐 -> 10
console.log(var4);
console.log(var5);

let userName = "안유경";
let userNickname = "cozyu";

let displayName = userName?? userNickname;
console.log(displayName);

//2. typeof 연산자: 값의 자료형을 문자열로 반환하는 기능을 하는 연산자

let var6 ="hello";
console.log(var6);


let t1= typeof(var6);
console.log(t1);

//3. 삼항 연산자
let var7 = 10;

//요구사항: 변수 res에 var7의 값이 짝수이면 "짝"을, 홀수이면 "홀"을 출력하도록 하라
let res = (var7%2 === 0) ? "짝" : "홀";
console.log(res);
