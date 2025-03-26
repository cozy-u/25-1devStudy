import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import {useState, useRef} from "react"

  //추가, 수정, 삭제 기능을 구현할 때 사용할 수 있는 데이터(mockdata)를 미리 만들어놓기 위해서
  //아래 mockData라는 배열에 객체로 데이터를 가지도록
const mockData = [
  { 
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  { 
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  { 
    id: 2,
    isDone: false,
    content: "책 반납하기",
    date: new Date().getTime(),
  },
];

function App() {
  //처음 초기화될 때 mockData를 가지고 생성됨
  const [todos, setTodos]=useState(mockData);
  const idRef = useRef(3);
  //content라는 매개변수로 Editor 컴포넌트에 입력한 값을 가져와 새롭게 TodoItem의 객체 형태로 만들어야 함
  const onCreate = (content)=>{
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }
    //스프레드 연산자로 기존의 todos 배열에 있던 것을 펼쳐주고,(기존의 todos 배열과 완전히 동일한 데이터)
    //그 앞에 콤마를 찍고 배열의 앞에 추가하고자 하는 데이터 newTodo를 넣어주면 됨
    setTodos([newTodo, ...todos]);
  }
  //push 메서드와 같은 것을 이용해서 상태 값을 직접 변경하면 안되고,
  //제공된 상태 변화 함수인 setTodos를 호출하여 인수로 새로운 값을 넣어서 변경해주어야 함.
  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate}/>
      <List/>
    </div>
  );
}

export default App
