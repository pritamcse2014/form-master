import { useState } from 'react';
import './StatefulForm.css'

const StatefulForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 character');
        }
        else {
            setError('');
        }
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" required />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" required />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;