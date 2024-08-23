import {useState} from "react";

function CountButton() {

    const [person, setPerson] = useState({
        firstName: 'John',
        lastName: 'Doe',
        age: 30
    })

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const incrementAge = () => {
        setPerson({...person, age: person.age + 1})
    }

    return <>
        <p>Compteur: {count}</p>
        <button onClick={increment}>Incrémenter</button>

        <p>Age de {person.firstName} : {person.age}</p>
        <button onClick={incrementAge}>Ajouter une année</button>
    </>

}

export default CountButton