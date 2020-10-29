import React, {useEffect} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodo from './hooks/useTodo';

function TodoApp(){
    const initialTodos = JSON.parse(localStorage.getItem("todos") || "[]");

    const {todos, newTodo, completed, deleteTodo, saveTodo} = useTodo(initialTodos); 

    useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos]);

    return(
        <div>
            <TodoForm newTodo={newTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} saveTodo={saveTodo} completed={completed} />
        </div>
    )
}

export default TodoApp;