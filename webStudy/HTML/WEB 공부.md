# WEB 공부

‘생활코딩’ 채널의 [WEBn] 시리즈 시청

Visual Studio Code 사용 

<aside>
📌 WEB 개발을 위해 필요한 HTML, CSS, Javascrpit에 대해서 공부해보자!
</aside>

# <WEB 1>

## WEB

- Web은 public domain: 특정 기업이 독접하지 않음
- Web의 개방성, 접근성 (Accessibility)
    - 신체적 장애가 있는 자들도 정보로부터 소외당하지 않도록 노력해야함

## HTML

- HTML
    - HyperText Markup Language
    - 웹페이지의 확장자는 .html

## HTML 기본문법 : 태그(Tag)

- 150개 이상의 태그가 존재
- CSS를 통해 좀 더 정교한 속성 표현 가능
- 웹페이지에서 우클릭 → 페이지 소스 보기 선택시 html 코드 볼 수 있음
- [http://www.advancedwebranking.com/html/](http://www.advancedwebranking.com/html/)
    
    전세계의 수많은 웹페이지들이 몇 가지 종류의 태그로 이루어져있는지 통계를 보여줌
    
- 태그
    
    > **제목**(heading): <h1> </h1> ~ <h6></h6>
    > 
    
    > **텍스트 강조**: <strong> </strong>
    > 
    
    > **텍스트 bold**: <b> </b>
    > 
    
    > **텍스트 밑줄**: <u> </u>
    > 
    
    > **단락 나눔**: <p></p>
    > 
    
    > **줄바꿈**: <br>
    > 
    
    > **줄바꿈**: <br>
    > 
    
    > **이미지 삽입**: <img [src=”이미지 주소”][width = “100%”]>
    > 
    > - 속성: src = “이미지 주소”, width=”비율%”
    > - 속성의 위치는 상관 X
    
    > **웹페이지 이름** : <title> </title>
    > 
    
    > **웹페이지 글자가 꺠지는 경우**: <meta [charset = “utf-8”]>
    > 
    > - html 코드는 utf-8로 작성되었지만 웹페이지가 utf-8로 문자를 읽지 않을 때 발생
    > - 위와 같은 코드를 작성하면 utf-8로 읽기 때문에 글자가 깨지지 않음
    
    > **HTML 코드 구조**
    > 
    > 
    > ```html
    > <! doctype html> //문서 타입이 html임을 명시
    > <html> //head와 body를 묶음
    > 	<head>
    > 		...
    > 	</head>
    > 	<body>
    > 		...
    > 	</body>
    > </html>
    > ```
    > 
    > - **문서 타입**이 html임을 명시: <! doctype html>
    > - **head와 body를 묶음**: <html>
    > - **코드 본문을 설명하는 내용, 코드 본문**: <head>, </head>, <body>, </body>
    
    > **링크**: <a [href=”링크 주소”] [target=”_blank”]> </a>
    > 
    > - 속성: href=”링크 주소”, target=”_blank”
    >     - target=”_blank”: 연결된 링크 주소가 새로운 탭에서 열리게 하는 속성
    
- parent, child 태그
    - 서로 포함관계로 연관되어 있는 태그들이 존재함
    
    > **목록 작성**
    > 
    > 
    > 부모 태그: <ul></ul> , <ol></ol>
    > 
    > - ul(unordered list): li로 작성된 내용을 목록으로 작성해줌
    > - ol(ordered list): 자동적으로 번호를 부여한 목록을 작성해줌 (1, 2, 3번 항목 중 2번을 삭제해도 일일이 수정할 필요없이 자동 변경해줌)
    > 
    > 자식 태그: <li> </li>
    > 
    > ```html
    > <ul>
    >     <li>1. HTML</li>
    >     <li>2. CSS</li>
    >     <li>3. JavaScript</li>
    > </ul>
    > ```
    > 
    > ```html
    > <ol>
    >     <li>HTML</li>
    >     <li>CSS</li>
    >     <li>JavaScript</li>
    > </ol>
    > ```
    > 
    

## Server & Client

인터넷이 동작하는 기본 원리

웹호스팅: github의 pages 기능 이용하여 내 레포지토리에 올린 html을 호스팅하는 기능