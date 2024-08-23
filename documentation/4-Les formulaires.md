## 4. Les formulaires
> - Les formulaires sont des éléments essentiels pour interagir avec les utilisateurs.
> - Ils permettent de collecter des données et de les envoyer à un serveur.
> - En React, les formulaires sont gérés à l'aide de `state` et de `props`.
> - Il est possible de contrôler les champs de formulaire en utilisant le `state`.
> - Les événements de formulaire sont gérés à l'aide de `méthodes` spécifiques.
> - Les données du formulaire peuvent être envoyées à un serveur à l'aide de `requêtes HTTP`.
> - Il est possible de valider les données du formulaire en utilisant des `fonctions de validation`.

### 4.1. Création d'un formulaire contrôlé
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

  return (
      <form>
      <label>
          First Name:
          <input type="text" value={firstName} onChange={handleChange} />
      </label>
      <p>First Name: {firstName}</p>
      </form>
  );
}
```
> - Dans cet exemple, le champ de texte est contrôlé par React à l'aide du `state` et de la méthode `handleChange`.
> - La valeur du champ est stockée dans le `state` et mise à jour à chaque changement de l'utilisateur dans le champ de texte `input`.
