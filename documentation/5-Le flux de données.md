# 5. Le flux de données
> - Le flux de données dans `React` est un concept important à comprendre.
> - Il s'agit de la manière dont les données sont transmises entre les composants.
> - Les données sont transmises de haut en bas, du parent vers l'enfant.
> - Mais il est possible de remonter les données de l'enfant vers le parent en utilisant des `callbacks`.

## 5.1. Flux de données descendant
> - Le flux de données descendant est le flux de données le plus courant dans `React`.
> - Les données sont transmises du parent vers l'enfant.
> - Par exemple, un parent peut transmettre des données à un enfant en utilisant des `props`.
> - Voici un exemple de transmission de données du parent vers l'enfant dans un composant `User`:
```jsx
import { useState } from 'react';
import ChildComponent from './ChildComponent.jsx';

function ParentComponent() {
    const [message, setMessage] = useState('Hello from Parent!');

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent message={message} onChange={setMessage} />
        </div>
    );
}

export default ParentComponent;
```
```jsx
function ChildComponent({ message, onChange }) {
    const [message, setMessage] = useState('Hello from Child!');
    
    return (
        <div>
            <h2>Child Component</h2>
            <p>{message}</p>
            <button onClick={() => onChange('Hello from Child!')}>Change Message</button>
        </div>
    );
}

export default ChildComponent;
```
> - Dans cet exemple, le composant `ParentComponent` transmet la `message` "Hello from Parent !" au composant `ChildComponent` en utilisant une `prop`.
> - Le composant `ChildComponent` affiche la `message` et fournit un bouton pour changer la `message`.
> - Lorsque le bouton est cliqué, le composant `ChildComponent` appelle la fonction `onChange` pour changer la `message` dans le composant `ParentComponent`.
> - Cela montre comment les données peuvent être transmises du parent vers l'enfant dans `React`.

## 5.2. Flux de données ascendant (exemple simple)
> - Le flux de données ascendant est moins courant que le flux de données descendant.
> - Il s'agit de la transmission de données de l'enfant vers le parent.
> - Pour remonter les données de l'enfant vers le parent, nous pouvons utiliser des `callbacks`.
> - Par exemple, un enfant peut transmettre des données à un parent en utilisant un `callback`.
> - Voici un exemple de remontée de données de l'enfant vers le parent dans un composant `Checkbox`:
```jsx
import { useState } from 'react';

function CheckBoxChildData() {

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return <>
        <div style={{border: '1px solid black', padding: '20px', margin: '20px'}}>
            <h1>CheckBoxChildData</h1>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleChange}/>
                Are you a human?
            </label>
        </div>
    </>;
}

export default CheckBoxChildData;
```