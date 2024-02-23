import './SimpleForm.css'

const SimpleForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;