# 5. Le flux de données
> - Le flux de données dans `React` est un concept important à comprendre.
> - Il s'agit de la manière dont les données sont transmises entre les composants.
> - Les données sont transmises de haut en bas, du parent vers l'enfant.
> - Mais il est possible de remonter les données de l'enfant vers le parent en utilisant des `callbacks`.

## 5.1. Flux de données descendant
> - Le `flux de données descendant` est le flux de données le plus courant dans `React`.
> - Les données sont transmises du `parent vers l'enfant`.
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
> - Dans cet exemple, le composant `ParentComponent` transmet le `message` "Hello from Parent !" au composant `ChildComponent` en utilisant une `prop` qui s'appelle `message`.
> - Cette props message est `stocké dans l'état` du composant `ParentComponent` et peut être modifié à l'aide de la fonction `setMessage`.
> - Le composant `ChildComponent` reçoit la props `message` et l'affiche.
```jsx
function ChildComponent({ message, onChange }) {

const handleClick = () => {
    onChange('Hello from Child!');
};

return (
    <div>
        <h2>Child Component</h2>
        <p>{message}</p>
        <button onClick={handleClick}>Change Message</button>
    </div>
);
}

export default ChildComponent;
```
