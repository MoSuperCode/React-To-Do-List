import "./ToDoList.css";

function ToDoList(props) {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.alter}</li>
            <li>{props.lachs}</li>
        </ul>
    );
}


export default ToDoList;