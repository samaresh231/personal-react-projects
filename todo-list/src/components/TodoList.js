import React from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoItem from './TodoItem';

function TodoList(props) {
    return(
        <div>
            <ul>
                {props.todos.map((todo) => <TodoItem key={uuidv4()} todo={todo} deleteTodo={props.deleteTodo} saveTodo={props.saveTodo} completed={props.completed} />)}
            </ul>
        </div>
    )
}

export default TodoList;