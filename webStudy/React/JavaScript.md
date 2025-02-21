# JavaScript

<aside>
☝️

JavaScript 기본

</aside>

### 1. 변수와 상수

```jsx
//1. 변수
let age = 27;
console.log(age);

age=24;
console.log(age);

//2. 상수
const birth = "2002.08.06";

//3. 변수의 명명규칙(네이밍 룰)
// 3-1. $와 _(underscore)를 제외한 기호는 사용할 수 없음
let $_name;
// 3-2. 숫자로 시작할 수 없음
let name2;
// 3-3. 예약어를 사용할 수 없음(if, while 등)
```

### 2. 자료형

```jsx
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

```

- 템플릿 리터럴 문법: ``(backtick)을 이용해서 문자열을 만들면 ${}안에 변수를 넣어 동적으로 문자열에 포함시킬 수 있음
- 형변환 (Type casting):  어떤 값의 타입을 다른 타입으로 변경하는 것
    
    - 개발자가 직접 설정하지 않아도 JS엔진이 알아서 형 변환을 하는 것
    
    - 명시적 형변환: 개발자가 직접 함수 등을 이용해 형 변환을 하는 것
    
    ```jsx
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
    
    ```
    

### 3. 연산자

- ==와 ===의 차이점
    - **==** : 자료형에 상관없이 그 형태가 같은지만 확인 (ex: 1과 '1'이 같다고 봄)
    - **===** : 자료형을 포함하여 완전히 일치하는지를 확인

```
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
```

- null  병합 연산자
    - 존재하는 값을 추려내느 기능
    - null, undefined가 아닌 값을 찾아내는 연산자

```jsx
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
```

- typeof 연산자: 값의 자료형을 문자열로 반환하는 기능을 하는 연산자

```jsx
let var6 ="hello";
console.log(var6); //hello

let t1= typeof(var6);
console.log(t1); //String
```

- 삼항 연산자: 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
    
    (`조건식) ? (참일 때의 값) : (거짓일 때의 값`)
    

```jsx
//3. 삼항 연산자
let var7 = 10;

//요구사항: 변수 res에 var7의 값이 짝수이면 "짝"을, 홀수이면 "홀"을 출력하도록 하라
let res = (var7%2 === 0) ? "짝" : "홀";
console.log(res);
```

### 4. 조건문

```jsx
//1. if문
let num = 0;

if (num>=10){
    console.log("num은 10 이상입니다.");
    console.log("조건이 참입니다.");
}else if(num>=5){
    console.log("num은 5 이상입니다.");
}else if(num>=3){
    console.log("num은 3 이상입니다.");
}else{
    console.log("조건이 거짓입니다.");
}

//2. switch문
let animal = "cat";

switch(animal){
    case "cat":{
        console.log("고양이");
        break;
    }
    case "dog":{
        console.log("개");
        break;
    }
    case "snake":{
        console.log("뱀");
        break;
    }
    case "monkey":{
        console.log("원숭이");
        break;
    }
    case "horse":{
        console.log("말");
        break;
    }
    default:{
        console.log("해당되는 동물이 없습니다.");
    }   
}
```

### 5. 반복문

- `for(초기식;조건문;증감식) {}`

```jsx

for(let i=1;i<=10;i++){
    if(i%2===0) continue;
    else console.log("반복 "+i+"회");
}
```

### 6. 함수

```jsx
//함수
function greeting(){
    console.log("안녕하세요!");
}

console.log("호출 전");
greeting();
console.log("호출 후");

//함수의 return
function getArea(width, height){
    let area = width*height
    return area;
}
console.log(getArea(10,20));

```

- 중첩 함수: 함수 안에 함수를 선언하여 사용이 가능

```jsx
function greeting(){
	function hello(){
    console.log("안녕하세요!");
  }
  hello();  
}
```

- 호이스팅
    - JS는 다른 언어와 달리 먼저 함수를 선언하지 않고 사용해도, 호이스팅을 통해 사용된 함수 정의 코드를 내부적으로 최상단으로 끌어올려 실행을 시켜줌
- 함수 표현식
    - 함수 funcA를 변수 varA의 이름으로 호출할 수 있음
    - 변수를 선언하면서 동시에 함수를 담을 수 있으나,  funcB의 이름으로는 해당 함수를 호출할 수 없으므로 이 경우에는 함수의 이름을 생략 -> 이를 익명함수라고 함
    - 함수 표현식으로 만든 함수의 경의 호이스팅의 대상에 해당 X
    
    ```jsx
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
    
    let varE = (value) => value+1 //return value+1과 같음
    console.log(varE(10));
    ```
    
- 콜백 함수: 자신이 아닌 다른 함수에, 인수로써 전달된 함수
    
    ```jsx
    //1. 콜백 함수
    function main(value){
        value();
    }
    
    function sub(){
        console.log("I am sub function");
    }
    
    main(()=>{
        console.log("I am sub function");
    });
    
    //2. 콜백 함수의 활용
    //구조가 흡사한 함수들이 필요할 때, 중복되는 코드를 발생시키지 않으면서 콜백 함수를 사용할 수 있음
    function iteration(cnt, callback){
        for(let i=1;i<=cnt;i++){
            callback(i);
        }
    }
    
    iteration(5, function(idx) {
        console.log(idx);
    });
    
    iteration(5, function(idx){
        console.log(idx*2);
    })
    ```