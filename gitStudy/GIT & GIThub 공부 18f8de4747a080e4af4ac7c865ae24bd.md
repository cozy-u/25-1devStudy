# GIT & GIThub 공부

‘생활코딩’ 채널의 [GIT1] - [GIT2] - [GIT3] - [GIT4] 시청

<aside>
📌 프로젝트 관리의 기본이 되는 git과 github를 공부해보자!

</aside>

# **<GIT 1>**

## GIT을 사용하는 이유

### 1. 버전 관리

- Create a new repository
    - 버전 관리를 할 저장소가 생성됨
    - 경로를 지정하면 해당 경로에 버전 관리를 위한 저장소가 생성됨 (숨김 파일로 생성됨)
- n changed files
    - 그 저장소에서 파일을 생성/수정/삭제하면 git에서 파일의 변경 사항이 업데이트
    - git을 사용하면 어떤 부분이 변경되었는지 알 수 있어 각 버전끼리의 차이점을 쉽게 알 수 있음
- Commit (=버전)
    - 작업이 끝나면 commit하여 저장 (= 버전 생성)
    - 여러 개의 파일의 변경 사항을 한꺼번에 commit 할 수 있음
- 과거의 버전으로 돌아갈 수 있음

### 2. 백업 - github!

- 내 컴퓨터에 있는 로컬 저장소를 github에 원격 저장할 수 있음
    - git = 로컬 저장소
    - github = 원격 저장소 (for backup)
    - 동기화 관계
- Push
    - 내 컴퓨터의 로컬 저장소의 변경사항을 원격저장소(github)에 밀어넣겠다!
- Pull
    - 원격저장소(github)에 올라와있는 것을 가져와서 로컬 저장소에서 변경

### 3. 협업

- push & pull
    - 원격저장소(github)를 매개로 협업이 가능
    - pull로 가져온 commit 내역(history)에서 원하는 버전을 선택하여 이어서 작업할 수 있음
- 만약 두 사람이 같은 파일을 수정하거나, 같은 파일의 같은 행을 수정하는 등의 경우에는
    - 나중에 commit하는 사람에게 해당 사항을 알려주어 덮어쓰기와 같은 불상사가 벌어지지 않도록 관리해줌

## Github 기능

- commit을 통한 변경 사항 추적
    - file1, file2, file3을 commit(1)한 뒤, file2, file3만 변경한뒤 다시 file1,file2,file3를 commit(2)하면 변경 사항이 있는 file2, file3만 새로운 버전(commit(2))에 포함되고 file1은 이전 버전(commit(1))을 유지함.
- clone
    - github상에 있는 레포지토리를 내 컴퓨터로 옮겨와서 사용하려고 할 때, github에서 저장소의 주소를 복사해
- Issues 게시판
    - 오류나 수정 사항 발생시 github내의 issue를 이용해 assignees를 지정하여 전달할 수 있음
    - 해결 후에 close issue
- fork
    - github에서의 원본 저장소를 내 github 계정에 새 저장소로 복제
    - 원본 저장소에 직접적으로 수정할 수는 없음 ⇒ 변경 사항을 반영하려면 **Pull Request(PR)** 을 보내야 함

# **<GIT2 - SourceTree 버전관리>**

[https://www.youtube.com/playlist?list=PLuHgQVnccGMCejd1l8C8oyZSYQDtkMRAg](https://www.youtube.com/playlist?list=PLuHgQVnccGMCejd1l8C8oyZSYQDtkMRAg)

## 스테이징

- Sourcetree에서 커밋한 내용들은 브랜치 - master 또는 workspace의 history에서 커밋메시지와 함께 확인할 수 있음
    - 커밋메시지를 누르면 어떤 파일에서 어떤 변경이 있었는지 확인 가능
- 스테이징
    - 커밋이 가능한 상태로 올리는 것 = git add
    - 이를 통해 여러 개의 파일이 변경되어도 원하는 파일만 스테이징하여 커밋 가능

## reset & revert

- reset
    - 돌아가길 원하는 커밋 위에서 우클릭 → “이 커밋까지 현재 브랜치를 초기화” 버튼을 눌러 그 커밋 상태로 돌아갈 수 있음
    - 로컬 레포지토리도 그 커밋의 상태로 reset/돌아가기 때문에 이전으로 돌아갈 수 없음
    - 그렇기 때문에 보통 revert를 사용
- revert
    - 취소하고 싶은 커밋 위에서 우클릭 → “커밋 되돌리기” 버튼을 눌러 그 커밋 상태로 돌아갈 수 있음
    - reset과 달리 커밋한 내역을 없애버리는 것이 아니라 **+, - 의 관계로 표현되는 개념**
    - 실수로 잘못 커밋한 내역이 있더라도 **revert**를 통해 돌아가는게 안전!
    
    ![image.png](./gitStudy/img/image.png)
    
    - revert를 하면서 충돌을 방지를 위해
        
        만약 이 상태에서 “GIT2 공부중”으로 돌아가고 싶다면 바로 revert “GIT2 공부중 2”을 하는 것이 아니라,  revert “revert 연습”→ revert “GIT2 공부중! 2”을 실행해야 충돌없이 “GIT2 공부중”으로 돌아갈 수 있음
        
- 특정 버전이었을 때 어떤 모습이었는지 확인하고 싶다면 그 버전(commit)을 더블 클릭하여 그 버전이었을 때로 돌아가볼 수 있음
    - 다른 그 이후의 버전이 삭제되는 것이 아니라 확인만 하는 용도
- commit ID
    - 해당 버전의 ID = SHA
    - 원하는 커밋 메시지 위에서 우클릭 → Copy SHA to Clipboard

### .gitignore

- .gitignore
    - 버전 관리를 하면 안되는 것은 .gitignore이라는 파일을 만들어 그 안에 넣어두면 됨

# <GIT3 - SourceTree Branch & 충돌>

- branch
    - **독립적인 개발 환경 제공**→ 브랜치를 생성하면 원본 코드(main)과 분리되어 자유롭게 개발 가능
    - **기능별, 실험용 브랜치 활용**→ 새로운 기능 추가, 버그 수정 등을 별도의 브랜치에서 진행 후 병합
    - **협업 효율성 향상**→ 여러 개발자가 각자의 브랜치에서 작업 후 합치는 방식으로 충돌 방지
- 충돌
    - 여러 개의 브랜치를 합병할 때 발생하는 문제
    - 같은 파일의 같은 부분이 수정된 경우 사용자에게 수동으로 수정을 유청

## branch

![image.png](./gitStudy/img/image%201.png)

- 여러개의 브랜치를 만들었을 때, 각 브랜치에서 수정사항이 반영되면 다음과 같이 표현됨
    - master : 저장소를 만드는 순간 생성되는 main 브랜치
    - apple 브랜치, google 브랜치, master 브랜치는 모두 같은 부모 브랜치인 work3에서 파생됨

## checkout

![image.png](./gitStudy/img/a298f6dd-6055-4997-8974-47a115804a97.png)

- head: 현재 속해있는 브랜치
    - head가 google 브랜치에 있음
- checkout: head를 다른 브랜치로 옮기는 것
    - apple로 checkout한다 = 현재 head가 올라가 있는 google 브랜치에서 apple 브랜치로 옮겨간다.

## merge

![image.png](./gitStudy/img/image%202.png)

- merge를 할 때는 어떤 브랜치를 어떤 브랜치에 merge할 지가 중요함
    - 메인이 되는 master 브랜치에서 다른 branch들을 병합해야함
    
    ![image.png](./gitStudy/img/image%203.png)
    
    - 만약 opentutorials 브랜치를 master 브랜치로 병합하려면,
    1. master 브랜치로 checkout
    2. opentutorials 브랜치 위에서 우클릭 → ‘현재 브랜치로 opentutorials 병합’ 선택
- 서로 다른 브랜치에서 수정한 뒤 merge할 때,
    - 다른 파일을 수정하는 경우 merge해도 충돌 X
    - 같은 파일의 다른 부분을 수정하는 경우 merge해도 충돌 X
    - 같은 파일의 같은 부분을 수정하는 경우 merge시 충돌 O
- cherrypick
    - 같은 base를 둔 서로 다른 브랜치 master와 other 브랜치가 있을 때, 만약 master 브랜치의 a3에 other branch의 b2 버전만 가져와서 병합하고 싶다면? b2를 cherrypick 해와서 병합하면 됨

![image.png](./gitStudy/img/b8450d68-1f7e-4ba4-827b-7a321c6ce85c.png)

![image.png](./gitStudy/img/bbdf9081-0d5c-4114-9ed8-4e783eb18a59.png)

# <GIT 4 - SourceTree 협업>

## 협업하기

- sourcetree에 github 원격 레포지토리 연결
    - github에서 레포지토리를 하나 만든 뒤 발급되는 SSH 키 복사
    - sourcetree에서 저장소 - 저장소 설정 - 원격 저장소 경로에 등록
    - push = 원격 저장소에 로컬 저장소에서의 커밋 밀어넣기
    - 이때, push가 안되는 오류가 발생하는 경우도 있는데 도구 - 옵션 = SSH 클라이언트 설정이 OpenSSH여야 함
- 레포지토리에 다른 인원 초대하는 방법 - github 닉네임 이용

[https://www.youtube.com/watch?v=zVQZbKLu1KU&list=PLuHgQVnccGMCeAdpRidv18VRVS8mqzFdS&index=3](https://www.youtube.com/watch?v=zVQZbKLu1KU&list=PLuHgQVnccGMCeAdpRidv18VRVS8mqzFdS&index=3)

### pull & push

- 동일한 파일의 동일한 위치를 수정하는 경우, push/merge할 때 더 늦게 한 사람이 해당 부분의 충돌을 수정하게 되어있음
- 가장 좋은 방법은 작업하기 전에 pull로 원격 저장소에 올라가있는 내용을 내려받은 후 작업하는 것!
    - pull, push 간격이 짧을 수록 이러한 충돌이 발생하지 않을 확률이 적음

[https://www.youtube.com/watch?v=J5zpIwTKlLU](https://www.youtube.com/watch?v=J5zpIwTKlLU)

### fetch

- 원격 브랜치
    
    ![image.png](./gitStudy/img/image%204.png)
    
    - origin/master 브랜치는 원격저장소에 저장되어 있는 master 브랜치를 의미
    - 따라서 현재 head가 올라가있는 master 브랜치 ≠ origin/master 브랜치
    
    ![image.png](./gitStudy/img/image%205.png)
    
    - master 브랜치와 origin/master 브랜치가 동일한 상태에서, master 브랜치에서 커밋을 하게 되면 위와 같이 origin/master 브랜치는 다른 버전을 갖게 됨
    
    ![image.png](./gitStudy/img/image%206.png)
    
    - 원격 저장소의 버전을 동일하게 유지하기 위해서는 master 브랜치의 커밋을 push해주면 됨
- fetch
    - 원격 저장소의 브랜치를 받아오기만 하고 내 컴퓨터의 로컬 저장소에는 병합하지 않은 상태
    - fetch하여 가저온 원격 저장소의 브랜치를 로컬 저장소에 merge하면 pull한 것과 같은 상태가 됨

### pull request

- 오픈소스 방식의 협업에서의 pull request
    - 아무리 오픈소스라고 하더라도 push 기능은 허용되지 않음 → 오픈소스 자체의 코드를 수정해서는 됨
    - 따라서 오픈소스를 받아와서 이런 기능을 넣어주었으면 좋겠어요!하며 pull request를 보내는 것
    - 즉 pull request는 원본이 내가 제안하는 코드를 pull하기를 요청하는 것!
- fork
    - clone의 경우 원격 레포지토리를 내 컴퓨터의 로컬 레포지토리에서 작업하고 (권한이 있으면) pull, push로 반영이 가능
    - fork의 경우엔 원본 저장소와는 독립적인 저장소로 동작하며, 원본 저장소의 변경 사항을 자동으로 가져오지 않으므로, pull request를 통해 원격 레포지토리에 변경 사항을 반영해야함
    - 내 로컬 레포지토리로 fork하는 방법: github의 fork에서 복사한 키를 sourcetree의 clone하기에 붙여넣으면 됨

# <GIT 명령어>

### git clone [저장소 주소]

github의 레포지토리 주소를 clone

github 원격저장소에 있는 레포지토리를 내 컴퓨터의 로컬 저장소로 옮겨오기

---

### git add [파일명.확장자]

파일을 commit 가능한 상태인 스테이징으로 옮

### git commit [-m] [ “커밋 메시지”]

커밋 메시지를 한 줄로 입력할 때 사용

### git commit [-a] [ “커밋 메시지”]

수정된 파일을 자동으로 add(스테이징)한 후 커밋

새로 추가된 파일은 포함되지 않음

### git push

github(원격저장소)에 현재까지 내 로컬 저장소에서 commit된 사항을 밀어넣기 

---

### git log

commit history를 볼 수 있음

### git status

레포지토리에서의 수정사항을 볼 수 있음 = n changed files

### git diff

어떤 파일에서 어떤 수정사항이 있었는지 볼 수 있음