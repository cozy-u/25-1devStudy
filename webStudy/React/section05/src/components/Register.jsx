//간단한 회원가입 폼
//1. 이름
//2 생년월일
//3. 국적
//4. 자기소개

import {useState, useRef} from "react";

const Register=()=>{
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio:""
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange=(e)=>{
        countRef.current+=1;
        console.log(countRef.current);
        setInput({
        ...input,
        [e.target.name]:e.target.value,
        });
    };
    
    const onSubmit=()=>{    //사용자가 4개의 폼에 입력을 모두 완료했는지를 확인해야함
        if(input.name===""){    //만약 input state의 name값이 빈 문자열이라면 이름을 입력하도록 focus를 줄 수 있음
            //이름을 입력하는 DOM 요소에 포커스
            inputRef.current.focus();
        }

    };

    return(
        <div>
            <div>
                <input
                ref={inputRef}  //input 태그가 렌더링하는 DOM요소가 inputRef라는 레퍼런스 객체에 저장됨됨
                name="name"
                value={input.name} 
                onChange={onChange} 
                placeholder = "이름"/>
            </div>
            <div>
                <input 
                name="birth"
                type="date" 
                value={input.birth}
                onChange={onChange}/> 
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
            </div>
            <button onClick={onSubmit} >제출</button>
        </div>
    );
};

export default Register;