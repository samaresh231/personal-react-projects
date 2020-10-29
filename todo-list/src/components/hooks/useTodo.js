import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos);

    return {
        todos,
        newTodo: (task) => {
            setTodos([...todos, {id: uuidv4(), task: task, isCompleted: false }]);
        },
        completed: (id) => {
            setTodos(todos.map((todo) => id === todo.id  ? {...todo, isCompleted : !todo.isCompleted}: todo));
        },
        deleteTodo: (id) => {
            const updatedTodos = todos.filter((todo) => todo.id !== id);
            setTodos(updatedTodos);
        },
        saveTodo: (id, val) => {
            setTodos(todos.map((todo) => id === todo.id  ? {...todo, task : val}: todo));
        }
    }
}