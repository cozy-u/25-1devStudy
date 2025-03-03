//단락평가
function returnFalse(){
    console.log("False 함수");  
    return false;
}

function returnTrue(){
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && returnTrue()); //단락평가 O
// returnFalse()와 returnTrue()를 동시에 호출하도록 했지만 True 함수는 호출되지 않음 => 단락평가에 의해 첫번째 피연산자인 returnFalse()값으로만 논리연산자의 결과가 확정되는 경우엔 두번째 피연산자 returnTrue()가 호출되지 않음
console.log(returnTrue() && returnFalse()); //단락평가 X
console.log(returnFalse() || returnTrue()); //단락평가 X
console.log(returnTrue() || returnFalse()); //단락평가 O
//returnFalse()와 returnTrue()를 동시에 호출하도록 했지만 False함수는 호출되지 않음 => 단락평가에 의해 첫번째 피연산자인 returnTrue()값으로만 논리연산자의 결과가 확정되는 경우엔 두번째 피연산자 returnFalse()가 호출되지 않음

//단락평가 활용 사례
function printName(person){
    const name = (person && person.name);
    console.log(name||"person의 값이 없음")
}   
//person 매개변수의 값이 falsy라면 단락평가에 의해 두번째 피연산자에는 접근하지 않게 됨

printName(); //undefined;
printName({name:"안유경"}); //안유경
