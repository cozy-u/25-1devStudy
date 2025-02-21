//1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

//2. String Type
let myName = "안유경";
let myLocation = "Seoul";
let introduce = myName + myLocation;
//2-1. 템플릿 리터럴 문법
// ``(backtick)을 이용해서 문자열을 만들면 ${}안에 변수를 넣어 동적으로 문자열에 포함시킬 수 있음.
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

//3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//4. Null Type(아무것도 없다)
let empty = null;

//5. Undefined Type
let none;
console.log(none);
