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
    ### 7. 스코프

- 변수나 함수에 접근하거나 호출할 수 있는 범위

```jsx
let a = 1;
function func1() {
let b = 2;
}
console.log(a); //전역 스코프에 해당되는 변수 a
console.log(b); //-> b는 func1 안에서 정의된 함수이므로 지역 스코프에 해당됨.  함수 외부에서는 접근할 수 없음
```

- 전역 스코프: 함수나 반복문, 조건문에 갇히지 않은 경우로, 전체 영역에서 접근 가능
- 지역 스코프: 블록 내에서 선언된 경우로, 특정 영역에서만 접근 가능

### 8. 객체

- 객체의 프로퍼티(속성)는 키(key) : 값(value)으로 이루어짐
- 키 값으로는 문자열이나 숫자만 이용할 수 있음
- 띄어쓰기가 포함된 경우엔 “” (따옴표) 안에 작성해야 함
    
    ```jsx
    //1. 객체 생성
    
    let obj1 = new Object() //객체 생성자
    let obj2 = {} //객체 리터럴
    
    //2. 객체 프로퍼티(속성)-> 키(key):값(value)
    let person={
        name:"안유경",
        age:24,
        extra:{},
        "my major":"CSE"
    };
    
    //3. 객체 프로퍼티를 다루는 방법
    //3-1. 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
    //점 표기법 
    let name = person.name;
    
    //괄호 표기법: 동적으로 프로퍼티를 변화시키면서 가져와야할 때 유용
    let age = person["age"];
    
    let property = "my major"; 
    let major = person[property];
    
    //3-2. 새로운 프로퍼티를 추가하는 방법
    person.job="student";
    person["favoriteFood"] = "떡볶이";
    
    //3-3. 프로퍼티를 수정하는 방법
    person.job = "graduated";
    person["favoriteFood"] = "피자";
    
    //3-3. 프로퍼티를 삭제하는 방법
    delete person.job;
    delete person["favoriteFood"];
    
    //3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
    let result1 = "name" in person;
    console.log(result1); //true
    let result2 = "cat" in person;
    console.log(result2);//false
    ```
    
- 상수 프로퍼티와 메서드
    
    ```jsx
    //1. 상수 객체: 상수는 새로운 값을 할당하는게 불가능하지만 상수로 선언된 객체는 추가, 수정, 삭제는 가능
    const animal = {
        type: "고양이",
        name: "나비",
        color: "black"
    };
    
    animal.age = 2; //추가
    animal.name = "먹구름"; //수정
    delete animal.color; //삭제
    
    console.log(animal);
    
    //2. 메서드: 값이 함수인 프로퍼티
    const person = {
        name: "이정환",
        sayHi: function() {
            console.log("안녕~!");
        },
    };
    
    person.sayHi();
    ```
    

### 9. 배열

```jsx
//1. 배열 생성
let arrA = new Array(); //배열 생성자
let arrB = []; // 배열 리터럴

let arrC = [1, 2, 3, true, "hello", null, undefined, ()=>{}, {}, []];
console.log(arrC);

//2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[4];

arrC[0]="hello";
console.log(arrC);
```

<aside>
✌️

**JavaSript 심화**

</aside>

### 1. truthy와 falsy

- Javascript에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다.
- truthy와 falsy: 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징
- JS에는 7개의 falsy가 존재

```jsx
//1-falsy
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7= 0n;

if(!f1){
    console.log("falsy");
}

//2-truthy
//-> 위의 7가지 경우를 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = ()=>{};

//3-활용 사례
function showName(person){
    //if(person.name === undefined || person.name === null)
    if(!person){ //person 값이 truthy value가 아닌 모든 경우에 대하여
        console.log("person의 값이 없음");
        return;
    }   
    console.log(person.name);
}

let person = {name:"안유경"}; //truthy
showName(person);
```

### 2. 단락 평가

- 첫번째 값 피연산자의 값만으로도 논리연산자(AND, OR) 계산 결과를 확정지을 수 있음

```jsx
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
```

### 3. 구조 분해 할당

- 배열이나 객체에 저장된 여러 개의 값들을 분해하여 각각 다른 변수에 할당하는 문법

```jsx
//1. 배열의 구조 분해 할당 - []
let arr = [1,2,3];

let [one, two, three, four=4] = arr;
// 변수 one, two, three에 각각 arr의 요소인 1, 2, 3이 순서대로 할당됨
// 추가로 변수 four에는 기본값으로 4를 설정하여 할당할 수 있음음

console.log(one, two, three, four);

//2. 객체의 구조 분해 할당 - {}
let person = {
    name : "안유경",
    age: 24,
    major: "CSE",
};

let {name, age:myAge, major, year = 4} = person;
//배열의 구조 분해 할당과 동일하지만 중괄호{}를 사용한다는 차이가 있음
// age 프로퍼티의 값을 age라는 변수가 아닌 myAge에 할당하고 싶다면 age:=myAge로 적어주면 됨 
console. log(name, myAge, major, year);

//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, major, year})=>{
    console. log(name, myAge, major, year);
}
//매개 변수를 넘겨줄 때 반드시 객체 구조분해 할당 방식 {}을 이용해야 함.

func(person); //객체(person)를 넘겼을 때만 사용 가능

```

### 4. spread 연산자와 rest 매개변수

- Spread 연산자: …
    - 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할
- Rest 매개변수
    - 여러 개의 매개변수를 받아와야할 때 배열 형태로 여러 개의 매개변수를 받아올 수 있음
    - rest 매개변수는 변수 이름 앞에 …을 붙여주면 됨 (ex: …args)
    - rest 매개변수 앞에는 추가로 매개변수를 더 선언할 수 있지만 뒤에는 선언 불가

```jsx
//1. Spread 연산자: ...
//객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
//만약 arr2에 [4,1,2,3,5,6] 순서대로 넣고 싶다면 let arr2 = [4, arr[0], arr[1], arr[2], 5, 6]; 을 사용해도 되지만 배열 arr[1]의 값이 변경될 수 있음

let arr2 = [4, ...arr1, 5, 6];
//-> Spread 연산자를 이용하면
//let arr2 = [4,...arr1, 5, 6];으로 작성해주면 됨

console.log(arr2);

let obj1 = {
    a:1,
    b:2,
}
let obj2 = {
    ...obj1,
    c:3,
    d:4,
}

console.log(obj2);

function funcA(p1,p2,p3){
    console.log(p1,p2,p3);
}

funcA(...arr1);

//2. Rest 매개변수
// 여러 개의 매개변수를 받아와야할 때 배열 형태로 여러 개의 매개변수를 받아올 수 있음 

function funcB(one,...rest){
    console.log(rest);
}
//변수 one에는 arr1[0]이 들어가고 rest에 배열형태로 나머지 arr1[1]부터 저장됨
//rest 매개변수 앞에는 추가로 매개변수를 더 선언할 수 있지만 뒤에는 선언 불가 

funcB(...arr1);
```

### 5. 원시타입 vs 객체타입

- 원시타입과 객체타입은 값이 저장되거나 복사되는 과정이 서로 다름
    - 원시타입은 값 자체로써 변수에 저장, 복사되지만 객체 타입은 참조값을 통해 변수에 저장, 복사됨
    - 원시타입: Number, String, Boolean 등
    - 객체타입: Object, Array, Function 등
- 원시타입

```jsx
let p1 = 1;
let p2 = p1;

p2 = 2;
```

- p1과 p2는 각각 메모리 공간에 1이라는 값을 가리키도록 되어있었는데 `p2=2;` 가 실행되면 원본 데이터가 수정되는 것이 아니라 메모리 공간에 새게 2라는 값을 저장하고 p2가 그 메모리 공간을 가리키도록 설정됨 ⇒ 원본 데이터가 수정되지 않기 때문에 불변값이라고 부르기도함

- 객체타입

```jsx
let o1 = {name: "안유경"};
let o2 = o1;

o2.name = "홍길동";
```

- o1 객체 값이 저장된 메모리 공간을 가리키는 참조값을 새로운 메모리 공간에 저장하고, o1은 그 참조값이 저장된 메모리 공간을 가리킴 `let o2 = o1;`가 실행되면 o2는 o1의 참조값이 저장된 메모리 공간을 가리키게 됨

- 반면 객체타입은 `o2.name = "홍길동";`이 실행되면 처음에 저장되어 있는 o1 객체값을 수정해버리기 때문에 o1의 name 프로퍼티의 값도 "홍길동”이 됨 ⇒ 원본 데이터가 수정되기 때문에 가변값이라고 부르기도함

- 객체타입을 사용할 때의 주의사항
1. 의도치 않게 값이 수정될 수 있음

```jsx
let o1 = {name: "안유경"};
let o2 = {...o1};
```
    
- o2를 생성할 때 o1을 그대로 가리키는 게 아니라 새로운 객체를 생성하면서 o1 내부 프로퍼티만 따로 복사해오는 방식을 사용해야 의도치 않게 값이 수정되는 경우를 예방할 수 있음 

- 위의 경우에는 아예 새로운 객체를 생성하는 것으로 판단하기 때문에 메모리 상에서도 새로운 참조값에 새로운 객체를 가리키도록 따로 저장이 됨 

2. 객체 간의 비교는 기본적으로 **참조값**을 기준으로 이루어짐

```jsx
let o1 = {name: "안유경"};
let o2 = o1;
let o3 = {...o1};

console.log(o1===o2); //true
console.log(o1===o3); //false
console.log(JSON.stringify(o1)===JSON.stringify(o3)); //true
```

- 객체 간의 비교는 기본적으로 **참조값**을 기준으로 이루어지기 때문에 같은 참조값을 가리키고 있는 o1와 o2는 동일하다고 판단되지만 o3은 새로운 참조값을 가지며 생성되었기 때문에 다르다고 판단

- 내장함수 JSON.stringify()를 이용하면 객체를 문자열로 변환하여 비교하기 때문에 true를 반환 

### 6. 반복문으로 배열과 객체 순회하기

- 순회(iteration): 배열, 객체에 저장된 여러 개의 값에 순서대로 하나씩 접근하는 것

```jsx
// 1. 배열 순회
let arr = [1,2,3];

//1-1. 배열 인덱스
for (let i =0;i<arr.length; i++){
    console.log(arr[i]);
}

//1-2. for of 반복문: 배열에만 사용 가능능
let arr2 = [4, 5, 6, 7, 8];
for(let item of arr){
    console.log(item);
};

//2. 객체 순회
let person = {
    name : "안유경",
    age: 24,
    major: "CSE",
};

//2-1. Object.keys: 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
for(let key of keys){
    const value = person[key];
    console.log(key, value);
}

//2-2. Object.values: 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for(let value of values){
    console.log(value);
}

//2-3. for in 반복문: 객체에만 사용 가능능
for(let key in person){
    const value = person[key];
    console.log(key, value);
}
```

### 7. 배열 메서드

1) 요소 조작

```jsx
//6가지 요소 조작 메서드
//1. push: 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
//push는 메서드 수행 이후에 변경된된 배열의 길이를 return함

let arr1 = [1,2,3];
const newLength = arr1.push(4, 5, 6);

console.log(newLength); //6
console.log(arr1); //[1,2,3,4,5,6]

//2. pop: 배열의 맨 뒤에 있는 요소를 제거하고 반환하는 메서드

let arr2=[1,2,3,4];
const poppedItem = arr2.pop();
console.log(poppedItem);

//3. shift: 배열의 맨 앞에 있는 요소를 제거하고 반환하는 메서드

let arr3=[0,1,2,3];
const shiftedItem = arr3.shift();
console.log(shiftedItem);

//4. unshifted: 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [2,3];
const newLength2 = arr4.unshift(1);

console.log(newLength2); //3
console.log(arr4); //[1,2,3]

//5. slice: 가위처럼 배열의 특정 범위를 잘라내어 새로운 배열로 반환
// 원본 배열의 값은 바뀌지 않음 
let arr5=[1,2,3,4,5];
let sliced = arr5.slice(2,5); //잘라낼 인덱스의 범위 (시작, 끝+1)을 작성하거나(끝까지 자를 경우 인덱스 생략 가능)
console.log(sliced);

let sliced2 = arr5.slice(-3); //뒤에서부터 몇개의 요소를 잘라낼 것인지 작성하여 사용
console.log(sliced2);

//6. concat: 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1,2];
let arr7 = [3,4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
```

2) 순회와 탐색

```jsx
//5가지 요소 순회 및 탐색 메서드

//1. forEach: 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
//매개 변수로 현재요소, 반복 카운트. 원본 배열을 전달
let arr1 = [1,2,3];
arr1.forEach(function(item,idx, arr){
    console.log(idx, item*2);
}); //콜백함수를 매개변수로 넘겨준다

let doubledArr =[];
arr1.forEach((item)=>{
    doubledArr.push(item*2);
});
console.log(doubledArr);

//2. includes: 배열에 특정 요소가 있는지 확인하는 메서드
let arr2=[1,2,3];
let isIncluded =arr2.includes(10);
console.log(isIncluded); //false

//3. indexOf: 특정 요소의 인덱스를 찾아서 반환
//배열에 중복되는 값이 존재하면 그 중 인덱스가 가장 작은 것이 반환됨
let arr3=[1,2,3];
let index=arr3.indexOf(2);
console.log(index); //1

//4. findIndex: 모든 요소를 순회하면서. 콜백함수를 만족하는(참이 되는는) 특정 요소의 인덱스를 찾아서 반환
let arr4=[1,2,3];
const findedIndex = arr4.findIndex((item)=>item%2 !==0);
console.log(findedIndex);

//5. find: 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환함

let arr5=[
    {name:"안유경"},
	{name: "홍길동"},
];

const finded = arr5.find((item)=>item.name==="안유경");

console.log(finded);
```

- indexOf와 findIndex의 차이: 객체에 대해서 인덱스를 찾고자 할 때, indexOf는 얕은 비교(===)로 동작하기 때문에 객체에 대해서는 사용이 불가능하므로 findIndex를 사용해야함
    
    ```jsx
    //indexOf와 findIndex의 차이: 객체에 대해서 인덱스를 찾고자 할 때, indexOf는 얕은 비교(===)로 동작하기 때문에 객체에 대해서는 사용이 불가능하므로 findIndex를 사용해야함
    let objectArr = [
    	{name:"안유경"},
    	{name: "홍길동"},
    ];
    
    console.log(objectArr.findIndex(
        (item)=>item.name = "안유경"));
    ```
    

3) 배열 변형 

```jsx
//5가지 배열 변형 메서드
//1. filter: 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1=[
    {name: "안유경", major: "CSE"},
    {name: "cozyu", major: "CSE"},
    {name: "홍길동", major: "MED"},
];

const CSEstudents = arr1.filter((item)=>item.major==="CSE");

console.log(CSEstudents);

//2. map: 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 변환
//forEach와 동일하게 매개 변수로 현재요소, 반복 카운트. 원본 배열을 전달

let arr2 = [1,2,3];
const mapResults = arr2.map((item,idx,arr)=>
{console.log(idx, item);
    return item*2;
});
console.log(mapResults);

//ex: arr1의 이름만 모아서 새로운 배열로 반환 
let names = arr1.map((item)=>item.name);
console.log(names);

//3. sort: 배열을 사전순으로 정렬하는 메서드
// 만약 정렬하고자 하는 배열의 요소가 숫자값인 경우엔 동작하지 않기 때문에 콜백함수로 기준을 설정해주어야 함
let arr3 = ["b", "a", "c"];
console.log(arr3.sort());

let arr4 = [10,4,7];
console.log(arr4.sort((a,b)=>{ //오름차순 정렬시
    if(a>b) return 1; //b가 a앞에 위치 => b, a 순
    else if(a<b) return -1;//a가 b앞에 위치 => a, b 순 
    else return 0; //자리를 바꾸지 않음 
}));

//4. toSorted: 기존의 배열을 정렬한 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

//5. join: 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr7=["hi", "I'm", "cozyu"];
const joined = arr7.join(" "); // 구분자는 default로 콤마(,) 직접 지정해서 변경할 수 있음
console.log(joined);

```

### 8.  Date 객체와 날짜

```jsx
//1. Date 객체를 생성하는 방법
//현재 시간
let date1 = new Date(); //생성자
console.log(date1);
//날짜 및 시간 지정
//대쉬(-), 콤마(,), 슬래시(/)를 사용하여 문자열로 날짜를 표기한 뒤, / 시간을 표기
let date2 = new Date("2002-08-06/10:10:10");
console.log(date2);
//또는 문자열을 사용하지 않고 콤마(,)로만 구분하여 표기해도 됨
let date3 = new Date(2021,3,2,8,30,0);
console.log(date3);

//2. 타임스탬프: getTime()
//특정 시간이 협정세계시(UTC)인 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자 값

let ts1 = date1.getTime();
console.log(ts1);

//타임 스탬프에 해당하는 시간으로 데이트 객체가 생성됨
let date4 = new Date(ts1);
console.log(date4);

//3. 시간 요소들을 추출
//getMonth()의 경우 0부터 시작하기 때문에 항상 1을 더해주기기
let year = date1.getFullYear();
let month = date1.getMonth()+1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

console.log(year, month, date, hour, minute, second);

//4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(2);
date1.setDate(1);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(30);

console.log(date1);

//5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString()); //우리나라 현지 포맷으로 시간 출력
```

### 9. 동기와 비동기

- 동기적으로 처리한다: 여러개의 작업이 있을 때 작업들을 순서대로 한 번에 하나씩만 처리하는 방식
    - thread: 작업을 직접 실행하고 처리해주는 역할을 함
    - JS는 기본적으로 동기적으로 코드를 실행한다 starving의 문제가 발생할 수 있음 => JS에는 스레드가 1개만 존재하므로 멀티스레드를 사용할 수 없고 비동기적으로 처리해야 함
- 비동기적으로 처리한다: 여러 개의 작업이 주어졌을 때 앞선 작업이 종료되지 않아도 기다릴 필요없이 다른 작업을 동시에 진행시키는것이 가능함
    
    ```jsx
    //동기
    console.log(1);
    console.log(2);
    
    //비동기
    console.log(1);
    setTimeout(()=>{console.log(2)},3000); //3000ms(3초) 이후에 콜백함수 내용이 실행됨
    console.log(3);
    ```
    
    - setTimeout()을 만나면 해당 코드가 실행완료되기까지 기다리는 것이 아니라 다음 코드를 실행
    - Web Browser= JS 엔진 + Web APIs
    - 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs에서 콜백함수와 함서 별도로 실행됨
    - 웹브라우저가 직접 관리하는 별도의 영역에서 비동기 작업이 처리되고 자바스크립트 엔진은 동기 작업을 실행하기 때문에 스레드가 1개 밖에 없음에도 비동기작업을 수행할 수 있음

### 10. 비동기 작업 처리하기

1) 콜백 함수

```jsx
/*
function sumTask(a, b, callback){
    setTimeout(()=>{
        const sum = a+b;
        callback(sum);
    },3000);
}

sumTask(1,3,(value)=>{console.log(value)});
*/

function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    },3000)
};

function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`; //백틱 
        callback(cooldownedFood);
    },2000);
};

function freezeFood(food, callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`; //백틱 
        callback(freezedFood);
    },1500);
}

orderFood((food)=>{
    console.log(food);
    cooldownFood(food,(cooldownedFood)=>{
        console.log(cooldownedFood);
        freezeFood(cooldownedFood,(freezedFood)=>{
            console.log(freezedFood);
        });
    });
});
```

- 콜백 함수를 이용해서 받아온 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 넣어주는 코드가 반복되다보면 인덴트가 깊어지는 콜백 지옥에 빠질 수 있음 => promise 객체를 이용

2) promise 객체

- 비동기 작업을 좀 더 효율적으로 처리할 수 있도록 도와주는 JS의 내장 객체
- API를 호출하거나 다른 서버와 통신하는 등의 작업에서 프로미스 객체가 활발히 사용됨
- setTimeout() 함수와 같은 비동기 작업을 감싸는 객체로, 다음과 같은 기능을 제공
    - 비동기 작업 실행
    - 비동기 작업 상태 관리
    - 비동기 작업 결과 저장
    - 비동기 작업 병렬 실행
    - 비동기 작업 다시 실행 등등
- 비동기 작업은 진행 단계에 따라서
    - 대기 (Pending) → 해결(resolve) → 성공(Fulfilled)
    - 대기 (Pending) → 거부(reject) → 실패(Rejected)
- then 메서드
    - promise가 resolve되면, executor에서 resolve 함수를 수행한 뒤에 then메서드의 콜백함수를 실행시켜주고, resolve의 인수로 전달한 결과값을 매개변수로 제공해줌
- catch 메서드
    - promise가 reject되면, executor에서 reject 함수를 수행한 뒤에 catch메서드의 콜백함수를 실행시켜주고, reject 함수의 인수로 전달한 결과값을 매개변수로 제공해줌

```jsx
const promise = new Promise((resolve, reject)=>{
    //Executor: 수행할 비동기 작업의 콜백함수
    setTimeout(()=>{
        const num = null;
        if(typeof num === 'number'){
            resolve(num+10);
        }
        else{
            reject("num이 숫자가 아닙니다.");
        }
    },2000);
});

//then 메서드
//promise가 resolve되면, executor에서 resolve 함수를 수행한 뒤에 then메서드의 콜백함수를 실행시켜주고, resolve의 인수로 전달한 결과값을 매개변수로 제공해줌 

promise.then((value)=>{console.log(value)});

//catch 메서드
//promise가 reject되면, executor에서 reject 함수를 수행한 뒤에 catch메서드의 콜백함수를 실행시켜주고, reject 함수의 인수로 전달한 결과값을 매개변수로 제공해줌
promise.catch((error)=>{console.log(error)});

//then 메서드는 호출 결과로 promise 객체를 한 번 더 반환함. => 아래와 같이 표현하는 것이 가능
promise
.then((value)=>{console.log(value)})
.catch((error)=>{console.log(error)});
```

- promise를 통해 콜백 지옥을 방지하는 방법
    - promise chaining: then 메서드는 호출 결과로 promise 객체를 한 번 더 반환함. => 아래와 같이 표현하는 것이 가능
    `promise
    .then((value)=>{console.log(value)})
    .catch((error)=>{console.log(error)});`

```jsx
function add10(num){
    const promise = new Promise((resolve, reject)=>{
        //Executor: 수행할 비동기 작업의 콜백함수
        setTimeout(()=>{
            if(typeof num === 'number'){
                resolve(num+10);
            }
            else{
                reject("num이 숫자가 아닙니다.");
            }
        },2000);
    });
    return promise;
};

add10(0).then((result)=>{
    console.log(result);
    return add10(result);
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

```

- `add10(0).then()`에서`→ return add10(result);`를 실행하면 then메서드의 호출 결과가 새로운 프로미스 객체가 되므로 콜백 지옥에서 탈출할 수 있게 됨

- async: 어떤 함수를 비동기 함수로 만들어주는 키워드로, 함수가 프로미스를 반환하도록 해줌
    - await: async 함수 내부에서만 사용 가능한 키워드로, 비동기 함수가 다 처리되기를 기다리는 역할


```jsx
//async: 어떤 함수를 비동기 함수로 만들어주는 키워드
//함수가 프로미스를 반환하도록 해줌

async function getData(){
    return {
        name: "안유경",
        id: "cozyu"
    };
};
//{name: "안유경", id: "cozyu"}라는 객체를 그대로 반환하는 것이 아니라, 이 객체를 결과값으로 갖는 새로운 프로미스를 반환하는 함수가 됨

console.log(getData());
```

- 위의 함수를 async와 await를 사용하여 표현하면 다음과 같이 간단하게 나타낼 수 있음
```jsx
async function printData(){
    const data = await getData();
    console.log(data);
};
//then 메서드를 쓰지 않아도 알아서 getData()함수가 반환하는 promise가 종료되기를 기다렸다가 종료가 되면 그 객체 값이 바로 변수에 담기게 됨 

printData();
```
