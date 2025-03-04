const Button = ({children, text, color="black"})=>{
    
    const onClickButton = (e)=>{
        console.log(e);
        console.log(text);
    };
    return (
    <button 
    //onMouseEnter={()=>{console.log(text+"를 선택");}} 
    onClick ={onClickButton} style={{color:color}}>
        {text}-{color.toUpperCase()}
        {children}
    </button>
    )
};

Button.defaultProps = {
    color:"black",
};

export default Button;