# WEB 2

생활코딩의 [WEB2 - JavaScript]와 구글링을 통해 공부

ref> [https://dev-ini.tistory.com/36](https://dev-ini.tistory.com/36)

## JavaScript

- html은 컨텐츠를 쓰는 정적인 언어

- CSS는 컨텐츠를 디자인하는 언어

- JavaScript는 컨텐츠와 사용자가 상호작용할 수 있게 만드는 동적인 언어

## HTML 태그와 JavaScript

### 기본 틀

- JS는 기본적으로 HTML 위에서 동작하는 언어

- html 코드에서 JavaScript가 들어가는 부분은 <script> </script> 안에 작성 

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset = "utf-8";>
        <title>
        </title>
    </head>
    <body>
			<script>
			
				// JavaScript 언어가 들어가는 부분]
				
			</script>
    </body>
</html>
```

- html은 정적, JavaScript는 동적

```html
<body>
        <h1>JavaScript</h1>
        <script>
            document.write(1+1);
        </script>
        <h1>html</h1>
        1+1
    </body>
```

![image.png](web2_img1.png)

## 이벤트(event)

> **onclick**: 버튼 등의 객체가 눌린 상태
> 
> - ex: <input [type =”button”] [value=”버튼 이름”] [**onclick**= “javascript 코드”]>
> - alert: 특정 상태에서 경고문을 띄움
>     
>     ```html
>     <body>
>     	<input type='button' value='hi' onclick="alert('hi')">
>     </body>
>     ```
>     

> **onchange**: 텍스트상자 등의 객체에 텍스트 입력과 같은 이벤트로 인해 상태가 바뀐 상태
> 
> - ex: <input [type =”text”] [**onchange**= “javascript 코드”]>
>     
>     ```html
>     <body>
>     	<input type="text" onchange="alert('changed')">
>     </body>
>     ```
>     

> **onkeydown**: 특정 키가 눌리면 이벤트가 발생
> 
> - ex: <input [type =”text”] [**onkeydown**= “javascript 코드”]>
>     
>     ```html
>     <body>
>     	<input type="text" onchange="alert('changed')">
>     </body>
>     ```
>     

## 데이터타입

- JS의 자료형에는 8가지의 데이터 타입이 존재
    
    기본 자료형 (원시형, Primitive Type)
    
    > Boolean
    > 
    > 
    > Null
    > 
    > Undefined
    > 
    > Bigint
    > 
    > Number (숫자)
    > 
    > String (문자열)
    > 
    > Symbol
    > 
    
    - 값이 생성된 이후에는 변경할 수 없음
    
    - 다른 변수에 값을 할당하거나 함수 인자로 전달할 경우, 값을 복사하여 전달 (pass by value)
    
    객체 자료형 (참조형, ReferenceType)
    
    > Object 배열, 함수, 사용자 정의 클래스를 모두 포함
    > 
    
    - 객체의 주소를 복사하여 전달 
    
- 기본 자료형
    
    > **Number**
    > 
    > 
    > - 정수 및 부동소수점 숫자
    > 
    > - NaN, 무한대, -무한대를 포함 
    > 
    
    > **Bigint**
    > 
    > 
    > - 숫자형으로 나타낼 수 없는 2^53-1 보다 크거나 -2^53-1보다 작은 값을 표현하기 위해 사용
    > 
    
    > **String**
    > 
    > 
    > - 큰따옴표(””), 작은따옴표(’’), 역따옴표(``)
    > 
    > - 역따옴표로 변수나 표현식을 감싼 후 ${…}안에 넣어주면, 원하는 변수나 표현식을 문자열 중간에 넣을 수 있음
    > 
    
    > **Boolean**
    > 
    
    > **Null**
    > 
    
    > **Undefined**
    > 
    > 
    > - Null과 Undefined는 비슷해보이지만 다르다!
    > 
    >   Null은 의도적으로 null이라는 값을 할당한 상태이지만 Undefined는 값 자체가 할당되지 않은 상태임
    > 
    
    > **Symbol**
    > 
    > 
    > - 변경 불가능한 유일한 값
    > 
- 객체 자료형
    
    > **Object**
    > 
    > 
    > - 객체: 식별자로 참조할 수 있는 메모리 값
    > 
    > - 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있음
    > 
    > - 객체는 중괄호{} 안에 키(key):값(value)쌍으로 이루어진 프로퍼티(property)를 넣어 만들 수 있음
    > 
    > - key에는 문자형, value에는 모든 자료형이 가능
    > 
    > - 빈 객체 만드는 방법
    >     
    >     `let user = new Object(); 
    >      let user = {};` 
    >     
    > - 프로퍼티 값 얻기
    >     
    >     `alert([객체명].[key]);` 
    >     
    >     `console.log([객체명].[key]);`
    >     
    > - 프로퍼티 추가하기
    >     
    >     `[객체명].[key]=[value];` 
    >     
    > - 프로퍼티 삭제하기
    >     
    >     `delete[객체명].[key];`
    >     
    >     ```jsx
    >     let user = {name:"John", age: 30, "like birds":true};
    >     
    >     alert(user.name); //John
    >     user.isAdmin = true; //user객체에 isAdmin:true 프로퍼티 추가
    >     delete user.age; //user객체에 age:30 프로퍼티 삭제
    >     console(user.["like birds"]); //true
    >     ```
    >     
    > - 계산된 프로퍼티 (computed property)
    >     
    >     ```jsx
    >     let fruit = prompt("어떤 과일을 구매하시겠습니까?", "");
    >     let bag = {[fruit]:5,};
    >     
    >     alert(bag.apple); //fruit에 apple이라는 키가 존재하면 true 반환
    >     ```
    >     
    > - **in 연산자로 프로퍼티 존재 여부 확인**
    >     
    >     `“key” in [object]`
    >     
    >     ```jsx
    >     let user = {name:"John", age: 30, "like birds":true};
    >     
    >     alert(user.name); //John 
    >     alert("age" in user); //true
    >     ```
    >     
    > - **for** key **in** object
    >     
    >     ```jsx
    >     let user = {
    >       name: "John",
    >       age: 30,
    >       isAdmin: true
    >     };
    >     
    >     for (let key in user) {
    >       alert( key );  // 키 값(name, age, isAdmin)
    >       alert( user[key] ); // value값(John, 30, true)
    >     }
    >     ```
    >     
    > - **for** of 연산자
    >     
    >     - 일반 객체 메소드
    >     
    >     ```jsx
    >     Object.keys(user); //key값을 담은 배열 반환
    >     Object.values(user); //value값을 담은 배열 반환
    >     Object.entries(user); //[key:value] 을 담은 배열[[Array][Array]] 반환
    >     ```
    >     
    >     ```jsx
    >     letuser = {
    >       name: "John",
    >       age: 30,
    >       isAdmin: true
    >     };
    >     
    >     for(let key of Object.keys(user)){
    >        alert(key);
    >     }
    >     ```
    >