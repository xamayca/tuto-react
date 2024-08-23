## 4. Les formulaires
> - Les formulaires sont des éléments essentiels pour interagir avec les utilisateurs.
> - Ils permettent de collecter des données et de les envoyer à un serveur.
> - En React, les formulaires sont gérés à l'aide de `state` et de `props`.
> - Il est possible de contrôler les champs de formulaire en utilisant le `state`.
> - Les événements de formulaire sont gérés à l'aide de `méthodes` spécifiques.
> - Les données du formulaire peuvent être envoyées à un serveur à l'aide de `requêtes HTTP`.
> - Il est possible de valider les données du formulaire en utilisant des `fonctions de validation`.

### 4.1. Création d'un formulaire avec champ contrôlé
> - Un formulaire contrôlé est un formulaire dont les champs sont contrôlés par React.
> - Les valeurs des champs sont stockées dans le `state` du composant et mises à jour à chaque changement.
> - Les formulaires contrôlés sont recommandés pour une gestion efficace des données.
> - Voici un exemple de formulaire contrôlé en React :
```jsx
import React, { Component } from 'react';

function App() {
  const [firstName, setFirstName] = React.useState('John Doe');

  const handleChange = (event) => {
      setFirstName(event.target.value);
  };
  
  const resetForm = () => {
      setFirstName('');
  };

  return (
      <form>
          <label>
              <p>First Name input handleChange :</p>
              <input type="text" value={firstName} onChange={handleChange}/>
          </label>
          <p>First Name input handleChange :</p>
          <code style={{backgroundColor: 'black',color:'white', padding:'0.5em'}}>{firstName}</code>
          <button type="button" onClick={resetForm}>Reset</button>
      </form>
  );
}
```
> - Dans cet exemple, le champ de texte est contrôlé par React à l'aide du `state` et de la méthode `handleChange`.
> - La valeur du champ est stockée dans le `state` et mise à jour à chaque changement de l'utilisateur dans le champ de texte `input`.
> - De cette façon, nous pouvons afficher la valeur du champ de texte en temps réel dans un paragraphe `p`.
> - Nous pouvons également réinitialiser le champ de texte en cliquant sur le bouton `Reset`.
> - Les formulaires contrôlés sont utiles pour gérer les données de manière efficace et réactive.
> - En revanche, cette façon de faire execute la fonction `handleChange` à chaque changement de l'utilisateur dans le champ de texte `input`.
> - Ce qui peut être `couteux en terme de performance` si le formulaire est `complexe` et `contient plusieurs composants` à mettre à jour à `chaque changement` dans le formulaire.

### 4.2. Création d'un formulaire avec champ non contrôlé
> - Un formulaire non contrôlé est un formulaire dont les champs ne sont pas contrôlés par React.
> - Les valeurs des champs ne sont pas stockées dans le `state` du composant.
> - Les formulaires non contrôlés sont recommandés pour une gestion simple des données.
> - Voici un exemple de formulaire non contrôlé en React :
```jsx
import React from 'react';

function App() {
    
    const defaultValueVariable = 'John Doe';
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`A name was submitted: ${event.target.name.value}`);
        console.log(new FormData(event.target));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>First Name input default value:</p>
                <input type="text" name="name" defaultValue={defaultValueVariable}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}
```
> - Dans cet exemple, le champ de texte est non contrôlé par React à l'aide de la propriété `defaultValue`.
> - La valeur du champ n'est pas stockée dans le `state` et n'est pas mise à jour à chaque changement de l'utilisateur.
> - La valeur du champ est récupérée à partir de l'objet `event.target` lors de la soumission du formulaire.
> - De cette façon, il n'y a pas de `rendu` à `chaque changement` dans le formulaire.

### 4.3. Quand utiliser un champ contrôlé ou non contrôlé ?
> - `Les champs contrôlés`:
> > - Ils sont recommandés pour une gestion efficace des données.
> > - Pour que les champs puissent être changés, il faudra utiliser à la fois `defaultValue` et `onChange` pour le rendre contrôlé.
> > - Si vous voulez gérer les données du formulaire en temps réel, utilisez un formulaire contrôlé.
> - `Les champs non contrôlés`:
> > - Ils sont recommandés pour une gestion simple des données.
> > - Si vous voulez seulement récupérer les données du formulaire lors de la soumission, utilisez un formulaire non contrôlé.
> > - Pour que les champs ne doivent pas être contrôlés, il ne faut pas utiliser `value` sur le champ.

### 4.4. Conclusion
> - Donc les champs contrôlés utilisent des `state` pour stocker les valeurs des champs et les mettre à jour à chaque changement.
> - Tandis que les champs non contrôlés ne stockent pas les valeurs des champs dans le `state` et ne les mettent pas à jour à chaque changement.