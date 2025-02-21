//1. 대입 연산자
let var1 = 1;

//2. 산술 연산자
let num1 = 3+2;
let num2 = 3-2;
let num3 = 3*2;
let num4 = 3/2;
let num5 = 3%2;

let num6 = (1+2)*10;

//3. 복합 대입 연산자
let num7 = 10;
num7 += 20; //30
num7 /= 5;  //6

//4. 증감 연산자
let num8 = 10;
console.log(++num8); //전위 연산 (++ 이후 출력)
console.log(num8--); // 후위 연산 (출력 이후 --)

//5. 논리 연산자
let or = true || false; 
let and = true && false;
let not = !true;
console.log(or, and, not); //true false false

//6. 비교 연산자
// ==와 ===의 차이점
// ==: 자료형에 상관없이 그 형태가 같은지만 확인(ex: 1과 '1'이 같다고 봄)
// ===: 자료형을 포함하여 완전히 일치하는지를 확인인
let comp1 = 1 === 2; 
let comp2 = 1 == '1';
let comp3 = 1 !== 2;

console.log(comp1, comp2, comp3); //false true true

let comp4 = 1 <= 4;
let comp5 = 5 >= 3;
console.log(comp4, comp5); //true ture