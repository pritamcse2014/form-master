import { useState } from 'react';
import './HookForm.css'
import useInputState from '../../hooks/useInputState';

const HookForm = () => {
    // System - 1
    // const [name, handleNameChange] = useState('admin');
    // const [email, handleEmailChange] = useState('admin@gmail.com');
    // const [password, handlePasswordChange] = useState();
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    // }

    // System - 2
    const nameState = useInputState('admin');
    const emailState = useInputState('admin@gmail.com');
    const passwordState = useInputState();
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            {/* System - 1
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input value={email} onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input value={password} onChange={handlePasswordChange} type="text" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form> */}
            
            {/* System - 2 */}
            <form onSubmit={handleSubmit}>
                <input {...nameState} type="text" name="name" />
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input {...passwordState} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;