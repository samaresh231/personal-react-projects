import {useState} from 'react';

function useInputForm(){
    const [value, setValue] = useState("");

    const setVal = (e) =>{
        setValue(e.target.value);
    }

    const reset = (e) => {
        setValue("");
    }

    return [value, setVal, reset];
}

export default useInputForm;