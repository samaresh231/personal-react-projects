import React, {useState} from 'react';

function TodoItem(props){
    const [isEditing, setIsEditing] = useState(false);
    const [val, setVal] = useState(props.todo.task);

    const handleSave = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing)
        props.saveTodo(props.todo.id, val);
    }

    const onEdit = (
        <div>
            <form onSubmit={handleSave}>
                <input value={val} onChange={(e) => setVal(e.target.value)}></input>
                <button>save</button>
            </form>
        </div>
    )

    const notOnEdit = (
        <div>
            <input type="checkbox" checked={props.todo.isCompleted} onChange={() => props.completed(props.todo.id)}></input>
            <span style={{textDecoration: props.todo.isCompleted ? "line-through" : "none"}}>{props.todo.task}</span>
            <button onClick={() => setIsEditing(!isEditing)}>edit</button>
            <button onClick={() => props.deleteTodo(props.todo.id)}>delete</button>
        </div>
    )

    return(
        <div>
            {isEditing ? onEdit : notOnEdit}
        </div>
    )
}

export default TodoItem;