// //3가지 Hook과 관련된 팁
// 1. 함수 컴포넌트 또는 custom hook 내부에서만 호출이 가능
// 2. 조건부로 호출할 수 없음
// 3. 나만의 훅(custom hook)을 직접 만들 수 있음 
//3-1. custom hook은 보통 별도의 폴더에 따로 보관

import useInput from "./../hooks/useInput";


const HookExam = ()=>{
    const [input, onChange] = useInput();
    return(
    <div>
        <input value ={input} onChange={onChange}/>
    </div>);
};

export default HookExam;
