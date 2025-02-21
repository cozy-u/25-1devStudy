//1. 묵시적 형변환
let num = 10;
let str = "20";

const result = num + str; //1020 -> 숫자형 변수 num이 문자형 변수로 형변환됨
console.log(result);

//2. 명시적 형변환
//2-1. 문자열 -> 숫자
let str1="10";
let strToNum1 = Number(str1); //10
console.log(strToNum1);

let str2="10개";
let strToNum2 = Number(str2); //Nan -> 숫자형이 아닌 값을 포함하고 있기 때문에 형변환이 불가능
console.log(strToNum2);

let strToNum3 = parseInt(str2); //10 -> 내장함수인 parseInt를 사용하는 경우 숫자형이 아닌 것을 제외하고 숫자형(Int)로 형변환이 가능
console.log(strToNum3);

//2-2. 숫자 -> 문자열
let num1 = 20;
let numToString = String(num1);
console.log(numToString+" 입니다");
