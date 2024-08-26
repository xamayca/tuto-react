# 7. Le hook useEffect
> - `useEffect` est un hook pour gérer les effets de bord dans les composants fonctionnels.
> - Les effets de bord sont des actions externes au rendu de l'interface utilisateur.
> - Exemples : appels API, modification du titre de la page, écoute d'événements.
> - `useEffect` s'exécute après chaque rendu et mise à jour du composant.
> - Il peut être utilisé comme `componentDidMount`, `componentDidUpdate`, et `componentWillUnmount` pour nettoyer les effets de bord.

## Création d'un composant avec un compteur
```jsx
import { useEffect, useState } from "react";

export function InputTextWithCooldown() {
    const [duration, setDuration] = useState(10);
    const [secondsLeft, setSecondsLeft] = useState(duration);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft((v) => {
                if (v <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return v - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [duration]);

    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setDuration(value);
        setSecondsLeft(value);
    };

    return (
        <>
            <h2>Decompte automatique UseEffect + OnChange</h2>
            <input
                type="text"
                id="test"
                value={duration}
                onChange={handleChange}
                placeholder="Timer..."
            />
            <p>Timer: {secondsLeft}</p>
        </>
    );
}
```
> - Ici, on a un composant `InputTextWithCooldown` qui affiche un champ de texte et un compteur.
> - Le compteur est initialisé à 10 secondes avec `useState` et `setDuration`.
> - On utilise `useEffect` pour décrémenter le compteur toutes les secondes.
> - Dans la fonction de rappel de `useEffect`, on utilise `setInterval` pour décrémenter le compteur.
> - `setSecondsLeft` est utilisé pour `mettre à jour` le compteur et une `condition` qui `arrête` le compteur à `0` si le compteur est `inférieur ou égal à 1`.
> - On nettoie le timer avec `clearInterval` dans la fonction de retour de `useEffect`.
> - `duration` est passé comme dépendance de `useEffect` pour réinitialiser le compteur.
> - On met à jour le compteur et la durée avec `setDuration` et `setSecondsLeft` dans `handleChange`.
> - `handleChange` est appelé à chaque modification du champ de texte avec `onChange`.
> - Le compteur est réinitialisé à la valeur du champ de texte lorsqu'il est modifié par l'utilisateur avec `setSecondsLeft`.
> - Le composant affiche le champ de texte, le compteur et un titre.

## Conclusion
> - Dans l'exemple, on a utilisé `useEffect` pour décrémenter un compteur toutes les secondes.
> - On a utilisé `setInterval` pour décrémenter le compteur et `clearInterval` pour nettoyer le timer.
> - `useEffect` s'exécute `après chaque rendu` et `mise à jour` du `composant`, donc quand on `modifie la durée`, le compteur est `réinitialisé`.
> - Les dépendances de `useEffect` permettent de contrôler quand le `useEffect` est exécuté.
> - `useEffect` peut être utilisé pour nettoyer les effets de bord avec une fonction de callback (retour).