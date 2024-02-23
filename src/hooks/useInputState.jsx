import { useState } from 'react';
import './useInputState.css'

const useInputState = (defaultValue=null) => {
    const [value, setValue] = useState(defaultValue)
    // System - 1
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // }
    // return [value, handleChange]

    // System - 2
    const onChange = (event) => {
        setValue(event.target.value);
    }
    return {
        value,
        onChange
    }
};

export default useInputState;