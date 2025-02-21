//1. 함수 표현식
function funcA(){
    console.log("funcA");
}

let varA = funcA;   //함수 funcA를 변수 varA의 이름으로 호출할 수 있음
varA();

 //변수를 선언하면서 동시에 함수를 담을 수 있으나,  funcB의 이름으로는 해당 함수를 호출할 수 없으므로 이 경우에는 함수의 이름을 생략 -> 이를 익명함수라고 함
 
let varB = function funcB(){ 
    console.log("funcB");
}
varB();

let varC = function (){ 
    console.log("익명함수");
}
varC();

//2. 화살표 함수
let varD = ()=>{ 
    console.log("화살표 함수");
}
varD();

//만약 함수가 값을 반환만 하는 경우엔 다음과 같이 더 간결하게 표현할 수 있음

let varE = (value) => value+1
console.log(varE(10));