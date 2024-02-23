import './ReuseableForm.css'

const ReuseableForm = ({formTitle, handleSubmit, submitButton = 'Submit', children}) => {
    const handleLocalSubmit = (event) => {
        event.preventDefault();
        const data = {
            name : event.target.name.value,
            email : event.target.email.value,
            password : event.target.password.value,
        }
        handleSubmit(data)
    }
    return (
        <div>
            {/* <h2>{formTitle}</h2> */}
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitButton} />
            </form>
        </div>
    );
};

export default ReuseableForm;