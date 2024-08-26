# 8. Hook useId & useMemo

## Le hook `useId`
> - `useId` est un hook pour générer des identifiants uniques.
> - Il est utile pour les éléments de formulaire, les listes, les composants réutilisables, etc.
> - De cette façon, on peut éviter les conflits d'identifiants et les erreurs de rendu, car nos composants ont des identifiants uniques.
> - `useId` est une fonction qui prend un préfixe et retourne un identifiant unique.
> - Il utilise un compteur interne pour générer des identifiants uniques.
> - Voici un exemple d'utilisation de `useId` :
```jsx
import { useId } from "react-id-generator";

export function InputTextWithId() {
    const htmlId = useId();
    return <>
        <label htmlFor={htmlId}>Name:</label>
        <input type="text" id={htmlId} placeholder="Enter your name..." />
    </>;
}
```
> - Ici, on a un composant `InputTextWithId` qui affiche un champ de texte avec un identifiant unique.
> - `useId` est utilisé pour générer un identifiant unique pour le champ de texte.
> - `htmlId` est utilisé pour l'attribut `id` et `htmlFor` de l'étiquette pour lier le champ de texte et l'étiquette.
> - De cette façon, on peut éviter les conflits d'identifiants et les erreurs de rendu.
> - `useId` peut également prendre un préfixe pour générer des identifiants uniques avec un préfixe personnalisé.
> - Voici un exemple d'utilisation de `useId` avec un préfixe :
```jsx
import { useId } from "react-id-generator";

export function InputTextWithPrefix() {
    const htmlId = useId("input-text");
    return <>
        <label htmlFor={htmlId}>Name:</label>
        <input type="text" id={htmlId} placeholder="Enter your name..." />
    </>;
}
```
> - Ici, on a un composant `InputTextWithPrefix` qui affiche un champ de texte avec un identifiant unique avec un préfixe `input-text`.
> - `useId` est utilisé pour générer un identifiant unique avec le préfixe `input-text` ce qui donne un identifiant unique comme `input-text-1`, `input-text-2`, etc.

## Le hook `useMemo`
> - `useMemo` est un hook pour optimiser les calculs coûteux dans les composants fonctionnels.
> - Il permet de mémoriser le résultat d'un calcul et de le réutiliser si les dépendances n'ont pas changé.
> - `useMemo` prend une fonction de calcul et un tableau de dépendances.
> - Il renvoie le résultat du calcul mémorisé.
> - `useMemo` est utile pour éviter les calculs coûteux à chaque rendu.
> - Voici un exemple d'utilisation de `useMemo` :
```jsx
import { useMemo, useState } from "react";

export function SquareCalculator() {
    const [number, setNumber] = useState("");

    const squaredNumber = useMemo(() => {
        const num = parseInt(number, 10);
        return isNaN(num) ? 0 : num * num;
    }, [number]);

    const handleChange = (event) => {
        setNumber(event.target.value);
    };

    return (
        <>
            <h2>Square Calculator</h2>
            <input
                type="number"
                value={number}
                onChange={handleChange}
                placeholder="Enter a number..."
            />
            <p>Square: {squaredNumber}</p>
        </>
    );
}
```
> - Ici, on a un composant `SquareCalculator` qui affiche un champ de saisie pour entrer un nombre et affiche le carré de ce nombre.
> - `useMemo` est utilisé pour calculer le carré du nombre entré.
> - La fonction de calcul est passée en premier argument de `useMemo` qui prend le nombre entré, le convertit en entier et renvoie le carré du nombre.
> - Le tableau de dépendances `[number]` est passé en deuxième argument de `useMemo` pour recalculer le carré du nombre si le nombre change.
> - De cette façon, on évite de recalculer le carré du nombre à chaque rendu si le nombre n'a pas changé.
> - Pour tester ce composant, entrez un nombre dans le champ de saisie et vous verrez le carré de ce nombre s'afficher.
> - C'est `useMemo` qui garde en mémoire le résultat du calcul et le réutilise si le nombre n'a pas changé.