# Node.js & React.js

## Node.js

### 1. Node.js

- 웹 브라우저가 아닌 환경에서도 JS코드를 실행시켜주는JS의 런타임, 즉 실행환경
- JS 터미널을 이용한 Node.js 실행
    
    > 패키지 생성하기: `npm -init`
    > 
    > 
    > 파일 실행하기: `node [파일경로/파일명]`
    > 
    > - 패키지 스크립트를 이용해 `start: “[파일경로/파일명]”`을 설정해두면 터미널에 경로를 명시하지 않아도 됨

### 2. Node.js의 모듈 시스템

- 모듈: 각 기능별로 나누어진 JS 파일
    - 쇼핑몰 시스템 → 회원 관리 기능 모듈, 장바구니 기능 모듈, 결제 기능 모듈
    - 만약 장바구니에 기능을 추가하고 싶다면 장바구니 기능 모듈만 열어서 수정하면 됨
- 모듈 시스템
    - **CJS (Common JS 모듈 시스템):** 모듈이라는 내장 객체에 exports라는 프로퍼티의 값으로 객체를 저장하여 내보낼 수 있음.
    - CJS에서 다른 모듈에서 내보낸 모듈을 불러오기 위해서는 require 사용
        
        ```jsx
        //math 모듈
        function add(a,b){
            return a +b;
        }
        
        function sub(a,b){
            return a- b;
        }
        
        module.exports = {
            add,
            sub,
        }
        ```
        
        ```jsx
        //math모듈을 불러와서 사용하기 위해서 require 사용
        const moduleData = require("./math");
        console.log(moduleData.add(1,2));
        console.log(moduleData.sub(1,2));
        
        //객체의 구조분해 할당 사용시
        // const {add, sub} = require("./math");
        //console.log(add(1,2));
        //console.log(sub(1,2));
        ```
        
    - **ES 모듈 시스템**: 사용하기 위해서 package.json 파일에 `"type": "module"` 을 함께 작성해줘야함. ⇒ 앞으로 해당 package는 ES모듈 시스템을 사용하겠다는 뜻
    - 객체를 내보낼 때: `export{add,sub};`와 같이 export 키워드 뒤에 객체를 리터럴로 생성해서 그 안에 내보내고 싶은 값들을 담아주거나 `내보낼 함수 앞에 export 키워드 작성`
    - 객체를 가져올 때: `import {add,sub} from "./math.js";` 와 같이 import 키워드 뒤에 가져올 객체를 작성하고 from “파일.확장자명”으로 불러옴
        
        ```jsx
        //math 모듈
        //ES 모듈 시스템: export 키워드 사용
        //방법 1
        /*
        function add(a,b){
            return a +b;
        }
        
        function sub(a,b){
            return a- b;
        }
        
        export{add,sub};
        */
        //방법2
        
        export function add(a,b){
            return a +b;
        }
        
        export function sub(a,b){
            return a- b;
        }
        //default 키워드 사용시 이 math모듈을 대표하는 기본값이 됨
        export default function multiply(a,b){
        	return a*b;
        }
        ```
        
        ```jsx
        import import mul from "./math.js";
        import {add,sub} from "./math.js";
        
        console.log(add(1,2));
        console.log(sub(1,2));
        console.log(mul(1,2));
        ```
        

### 3. Node.js의 라이브러리

- 라이브러리: 프로그램을 개발할 떄 필요한 다양한 기능들을 미리 만들어 모듈화해놓은 것
- 날짜/ 수학/ 그래픽 라이브러리 등을 설치하여 import로 불러와 사용 가능
    - (https://www.npmjs.com/)에서 Node.js의 모든 라이브러리를 설치할 수 있음
    
    ```coq
    // 설치 완료시 package.json파일에 다음과 같은 코드가 추가된 것을 확인할 수 있음 
    "dependencies": {
        "randomcolor": "^0.6.2"
    ```
    

    ```jsx
    //라이브러리를 불러올 때는 from뒤에 경로명을 명시하는게 아니라 라이브러리의 이름만 명시해주면 됨
    import randomColor from "randomcolor";
    const color = randomColor();
    console.log(color);
    ```

- 라이브러리가 설치된 뒤  package-lock.json 파일이 삭제되었거나 공유, github 업로드시에는 package.json 파일만 있으면 언제든지 `npm i` 명령어를 통해서 필요한 라이브러리를 다시 설치할 수 있기 때문에 node_modules 폴더는 공유하지 않아도됨

## React.js

- React는 Meta(Facebook)이 개발한 오픈소스 JS 라이브러리로, 대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만든 기술
- 넷플릭스, 페이스북, 인스타그램, 노션 등이 React.js를 통해 만들어진 서비스
- React.js의 기술적인 특징
    - 컴포넌트를 기반으로 UI를 표현함
        - 컴포넌트: 화면(UI)을 구성하는 요소
        - header, main, footer처럼 컴포넌트를 JS파일로 모듈화하여 중복 코드를 제어할 수 있게 됨
    - 화면 업데이트 구현이 쉬움
        - 업데이트: 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용하는 것
        - 선언형 프로그래밍: 과정은 생략하고 목적만 간결히 명시하는 방법
            - React는 선언형 프로그래밍으로 동작하기 떄문에 업데이트를 위한 복잡한 동작을 직접 정의할 필요 없이 특정 변수의 값을 바꾸는 것만으로도 화면을 업데이트 시킬 수 있음
            - 각각의 컴포넌트에는 현재의 컴포넌트 상태를 저장하는 state가 존재하는데, 이 state 값에 따라 각각 다른 UI를 화면에 렌더링하도록 설정할 수 있음
        - 명령형 프로그래밍: 목적을 이루기 위한 모든 일련의 과정을 설명하는 방
            - JS는 명령형 프로그래밍으로 동작하기 때문에 코드가 비교적 길고 복잡해질 수 있음
    - 화면 업데이트가 빠르게 처리됨