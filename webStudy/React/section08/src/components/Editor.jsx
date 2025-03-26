import './Editor.css'
import {useState, useRef} from "react";

const Editor = ({onCreate})=>{
    const [content, setContent] = useState("");
    const contentRef = useRef();
    //event Handler
    const onChangeContent = (e)=>{
        setContent(e.target.value);
    }

    const onKeyDown = (e)=>{
        if(e.keyCode===13)
            onSubmit();
    }

    //Editor 컴포넌트에서 추가 버튼이 눌리면 App 컴포넌트에서 만든 onCreate 함수를 호출하면서 인수로 입력된 값을 전달하도록 onSubmit 함수를 만들어서 버튼의 onClick 인수로 전달
    const onSubmit=()=>{
        //빈 입력이 들어왔을 때 contentRef.current에 포커스를 주도록
        if(content===""){
            contentRef.current.focus();
            return;
        }else{
            onCreate(content);
            setContent("");
        }
    };
    
    return <div className = "Editor">
        <input 
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."></input>
        <button onClick = {onSubmit}>추가</button>
    </div>
}

export default Editor;