import {useState} from "react";

function Form() {

    const [firstName, setFirstName] = useState('John Doe');

    const handleChange = (event) => {
        setFirstName(event.target.value);
    };

    const resetForm = () => {
        setFirstName('');
    };

    const defaultValueVariable = 'John Doe';
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`A name was submitted: ${event.target.name.value}`);
        console.log(new FormData(event.target));
    };

    return <>
        <form>
            <label>
                <p>First Name input handleChange :</p>
                <input type="text" value={firstName} onChange={handleChange}/>
            </label>
            <p>First Name input handleChange :</p>
            <code style={{backgroundColor: 'black', color: 'white', padding: '0.5em'}}>{firstName}</code>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>

        <form onSubmit={handleSubmit}>
            <label>
                <p>First Name input default value:</p>
                <input type="text" name="name" defaultValue={defaultValueVariable}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    </>;
}

export default Form