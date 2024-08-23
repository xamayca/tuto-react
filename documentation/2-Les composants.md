## 2. Les composants React
> - Les composants React sont des éléments de l'interface utilisateur qui peuvent être réutilisés.
> - Par exemple, un composant de bouton peut être réutilisé dans plusieurs endroits de l'application.
> - Le nom d'un composant doit commencer par une `lettre majuscule` pour être reconnu par React.
> - Voici un exemple de titre de page que nous allons utiliser en tant que composant :
```jsx
import React from 'react';

function Title() {
  return (
    <h1>Hello, world!</h1>
  );
}
```
> - Cette fonction `Title` retourne un élément `h1` qui affiche le texte `Hello, world!`, ce sera notre composant de titre.
> - Voyons comment styliser ce composant de titre avec une balise `style` :
```jsx
import React from 'react';

function Title() {
  return (
    <h1 style={{ color: 'blue', fontSize: '24px' }}>
      Hello, world!
    </h1>
  );
}
```
> - Dans cet exemple, nous avons ajouté un objet `style` à l'élément `h1` pour définir la couleur du texte et la taille de la police.
> - Il est important de comprendre que la balise `style` est un objet JavaScript qui contient les propriétés CSS à appliquer à l'élément.

## 2.1 Les propriétés (props)
> - Les propriétés (ou props) sont des données passées à un composant lors de son utilisation.
> - Par exemple, nous pouvons passer une propriété `text` et une propriété `color` à notre composant de titre :
```jsx
import React from 'react';

const properties = {
  text: 'Hello, world!',
  color: 'blue'
};

function Title(props) {
  return (
    <h1 style={{ color: props.color, fontSize: '24px' }}>
      {props.text}
    </h1>
  );
}
```
> - Dans cet exemple, nous avons défini un objet `properties` contenant les propriétés `text` et `color`.
> - Nous avons ensuite utilisé ces `propriétés` dans notre `composant de titre` en les passant `en tant que paramètres` de la fonction `Title`.
> - Il est important de noter que les propriétés sont `immuables`, c'est-à-dire qu'elles ne peuvent `pas être modifiées à l'intérieur du composant`.
> - Maintenant imaginons que nous avons beaucoup de propriétés à passer à notre composant de titre, cela peut devenir fastidieux.
> - Par exemple voici notre composant de titre avec plusieurs propriétés :
```jsx
import React from 'react';

const properties = {
  text: 'Hello, world!',
  color: 'blue',
  fontSize: '24px',
  fontWeight: 'bold'
};

function Title(props) {
  return (
    <h1 style={{ color: props.color, fontSize: props.fontSize, fontWeight: props.fontWeight }}>
      {props.text}
    </h1>
  );
}
```
> - Pour rendre notre code plus lisible, nous pouvons utiliser `...` pour passer toutes les propriétés à notre composant :
```jsx
import React from 'react';

const properties = {
  text: 'Hello, world!',
  color: 'blue',
  fontSize: '24px',
  fontWeight: 'bold'
};

function Title(props) {
  return (
    <h1 style={{ ...props }}>
      {props.text}
    </h1>
  );
}
```
> - Dans cet exemple, nous avons utilisé `...props` pour passer toutes les propriétés à l'élément `h1`.
> - Cela rend notre code plus `lisible` et `facile à maintenir` car nous n'avons pas besoin de passer chaque propriété individuellement.
> - Il y a une manière plus simple de passer des propriétés à un composant en utilisant la `déstucturation` :
```jsx
import React from 'react';

function Title({ text, children }) {
  return (
    <h1 style={{ color }}>
      {children}
    </h1>
  );
}
```
> - Dans cet exemple, nous avons utilisé la `déstructuration` pour extraire les propriétés `text` et `children` de l'objet `props`.
> - La propriété `children` est une propriété spéciale qui contient le contenu de l'élément lors de son utilisation.
> - Par exemple, si nous utilisons notre composant de titre comme suit :
```jsx
<Title text="Hello, world!">Welcome to React</Title>
```
> - Le texte `Welcome to React` sera affiché à l'intérieur de l'élément `h1` car il est passé en tant que `children`.
> - Il est important de noter que la propriété `children` est `optionnelle`, c'est-à-dire qu'elle n'est pas obligatoire pour un composant.
> - Les propriétés peuvent être `de tout type` : `string`, `number`, `boolean`, `array`, `object`, `function`, etc.