import {useState} from "react";

function Form() {

    const [firstName, setFirstName] = useState('John Doe');

    const handleChange = (event) => {
        setFirstName(event.target.value);
    };

    return <>
        <form>
            <label>
                First Name:
                <input type="text" value={firstName} onChange={handleChange}/>
            </label>
            <p>First Name: {firstName}</p>
        </form>
    </>
}

export default Form