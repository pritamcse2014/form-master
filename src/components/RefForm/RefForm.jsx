import { useEffect, useRef } from 'react';
import './RefForm.css'

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect( () => {
        nameRef.current.focus();
    }, [] )

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={'admin'} ref={nameRef} type="text" name="name" required />
                <br />
                <input defaultValue={'admin@gmail.com'} ref={emailRef} type="email" name="email" required />
                <br />
                <input ref={passwordRef} type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;