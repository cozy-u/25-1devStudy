import './List.css'
import TodoItem from './TodoItem';
const List = ()=>{
    return <div className = "List">
        <h4>ToDO List 🌱</h4>
        <input placeholder="검색어를 입력하세요."></input>
        <div className="Todos_Wrapper">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    </div>
}

export default List;