import React from 'react';
import useInputForm from './hooks/useInputForm';

function TodoForm(props){
    const [value, setValue, reset] = useInputForm("");

    function handleSubmit(e){
        e.preventDefault();
        props.newTodo(value);
        reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="New Todo" value={value} onChange={setValue}></input>
            <input type="submit"></input>
        </form>
    )
}

export default TodoForm;