import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import {useState} from "react";

function App() {
  const [count, setCount]=useState(0);

  //Controller 컴포넌트의 button을 누르면 값을 더하고 빼는 이벤트 핸들러
  const onClickButton=(value)=>{
    setCount(count+value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section >
        <Viewer count={count}/> 
      </section>
      <section>
        <Controller onClickButton={onClickButton}/> 
      </section>
      
    </div>
  )
}

export default App
