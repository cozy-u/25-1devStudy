import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  //1. 마운트: 탄생
  useEffect(()=>{console.log("mount")},[]);

  //2. 업데이트: 변화, 리렌더링
  //deps를 생략
  //useRef를 이용해서 컴포넌트가 최초로 마운트될 때는 update되지 않도록 하고, 다시 리렌더링이 될때 아래 코드를 실행하도록 설정.
  useEffect(()=>{
    if(!isMount.current){
      isMount.current=true;
      return;
    }
    console.log("update")});

  //3. 언마운트: 죽음
  //화면에 나타났다가 사라졌다가 하는 컴포넌트가 필요함 -> Even 컴포넌트
  
  //Controller 컴포넌트의 button을 누르면 값을 더하고 빼는 이벤트 핸들러
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input 
        value={input}
        onChange={(e)=>{
          setInput(e.target.value)
        }}></input>
      </section>
      <section >
        <Viewer count={count} />
        {count % 2 === 0 ? <Even/>:null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>

    </div>
  )
}

export default App
