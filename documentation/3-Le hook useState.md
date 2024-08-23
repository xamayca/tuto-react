## 3. Le hook useState
> - Le hook `useState` permet de gérer des `états` dans un composant fonctionnel.
> - Il prend en paramètre la `valeur initiale` de l'état et retourne un `tableau` contenant la `valeur actuelle` de l'état et une `fonction` pour la `mettre à jour`.
> - La `valeur actuelle` de l'état peut être `lue` et `modifiée` en utilisant la `fonction` retournée par `useState`.
> - Le hook `useState` peut être utilisé plusieurs fois dans un composant pour gérer plusieurs états.
> - Par exemple, on peut utiliser `useState` pour gérer un `compteur` dans un composant fonctionnel.

## 3.1. Créer un bouton avec un compteur
> - On peut créer un `bouton` qui `incrémente` un `compteur` à chaque clic en utilisant le hook `useState`.
> - On commence par importer le hook `useState` depuis la bibliothèque `react`.
> - Ensuite, on utilise le hook `useState` pour créer un état `count` initialisé à `0`.
> - On crée une fonction `increment` qui incrémente le compteur à chaque clic en utilisant la fonction `setCount` retournée par `useState`.
> - Enfin, on affiche le compteur et le bouton dans le composant fonctionnel.
```jsx
import {useState} from "react";

function App() {
     
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return <>
        <h1>Compteur : {count}</h1>
        <button onClick={increment}>Incrémenter</button>
    </>;

}

export default App
```
> - Lorsque l'utilisateur clique sur le bouton, le compteur est incrémenté et la valeur affichée est mise à jour.
> - React gère automatiquement la mise à jour de l'interface utilisateur en fonction des changements d'état du composant.

## 3.2. Créer un bouton pour ajouter l'âge d'une personne
> - On peut créer un `bouton` qui `ajoute` l'`âge` d'une `personne` à chaque clic en utilisant le hook `useState`.
> - On commence par importer le hook `useState` depuis la bibliothèque `react`.
> - Ensuite, on utilise le hook `useState` pour créer un `objet` `person` initialisé avec un `âge`, un `nom`, un `prénom` et un `age`.
> - On crée une fonction `addAge` qui ajoute 1 à l'âge de la personne à chaque clic en utilisant la fonction `setPerson` retournée par `useState`.
> - Enfin, on affiche les informations de la personne et le bouton dans le composant fonctionnel.
```jsx
import {useState} from "react";

function App() {
     
    const [person, setPerson] = useState({ firstName: 'John', lastName: 'Doe', age: 30 });

    const addAge = () => {
        person.age ++;
        setPerson(person);
    };

    return <>
        <h1>Personne : {person.firstName} {person.lastName} ({person.age} ans)</h1>
        <button onClick={addAge}>Ajouter un an</button>
    </>;

}
```
> - Lorsque l'utilisateur clique sur le bouton, l'âge de la personne n'est pas mis à jour correctement.
> - Nous avons fait une erreur en modifiant directement l'objet `person` avant de le mettre à jour avec `setPerson`.
> - C'est ce qui est appelé une `mutation` et cela peut entraîner des `effets de bord` dans notre application.
> - Pour éviter cela, on peut créer une `copie` de l'objet `person` avant de le modifier.
> - On peut utiliser la `fonction` de mise à jour de l'état pour `modifier` l'`état` en fonction de l'`état` précédent.
```jsx
import {useState} from "react";

function App() {
     
    const [person, setPerson] = useState({ 
        firstName: 'John',
        lastName: 'Doe',
        age: 30 
    });

    const addAge = () => {
        setPerson({ ...person, age: person.age + 1 });
    };

    return <>
        <h1>Personne : {person.firstName} {person.lastName} ({person.age} ans)</h1>
        <button onClick={addAge}>Ajouter un an</button>
    </>;

}
```
> - `...person` permet de `copier` toutes les `propriétés` de l'objet `person` dans le nouvel objet.
> - En utilisant la `syntaxe` `{ ...person, age: person.age + 1 }`, on crée une `copie` de l'objet `person` avec un `âge` `modifié`.
> - Ensuite, on utilise la `fonction` de mise à jour de l'état pour `mettre à jour` l'`état` avec la `nouvelle copie` de l'objet `person`.
> - Cela permet d'éviter les `mutations` et de garantir que l'`état` est `toujours immuable`.

