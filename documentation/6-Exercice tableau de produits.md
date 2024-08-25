# 6. Exercice tableau de produits
> - Créer un tableau de produits
> - Afficher les produits dans un tableau HTML
> - Ajouter un champ de recherche pour filtrer les produits
> - Diviser le tableau en plusieurs composants

## 6.1 Liste des produits
```jsx
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$3.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 13'},
    {category: 'Electronics', price: '$29.99', stocked: true, name: 'Headphones'},
    {category: 'Home Appliances', price: '$199.99', stocked: true, name: 'Blender'},
    {category: 'Home Appliances', price: '$59.99', stocked: false, name: 'Toaster'},
    {category: 'Books', price: '$14.99', stocked: true, name: 'The Great Gatsby'},
    {category: 'Books', price: '$9.99', stocked: false, name: '1984'}
];
```

## 6.2 Composant `InputSearch`
```jsx
export function InputSearch({placeholder, value, onChange}) {

    return <input
            type="text"
            value={value}
            placeholder={placeholder}
            style={{ width: '100%' }}
            onChange={(e) => onChange(e.target.value)}
        />
}
```
> - `placeholder` : texte affiché dans le champ de saisie
> - `value` : valeur du champ de saisie
> - `onChange` : fonction appelée lors de la saisie
> - Ici, on utilise un composant fonctionnel pour créer un champ de saisie contrôlé.
> - L'événement `onChange` est utilisé pour mettre à jour la valeur du champ de saisie.
> - Il est lié à la propriété `value` de la balise `<input>` pour afficher le texte saisi.
> - Ensuite, on passe en argument le `placeholder`, la `value` et la fonction `onChange` dans le composant `InputSearch` pour l'utiliser dans le composant parent.

## 6.3 Composant `Checkbox`
```jsx
export function Checkbox({id, checked, onChange, label}) {

    return <>
        <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id}>{label}</label>
    </>;
}
```
> - `id` : identifiant de la case à cocher
> - `checked` : état de la case à cocher
> - `onChange` : fonction appelée lors du changement d'état
> - `label` : texte affiché à côté de la case à cocher
> - Ici, on utilise un composant fonctionnel pour créer une case à cocher contrôlée.
> - L'événement `onChange` est utilisé pour mettre à jour l'état de la case à cocher.
> - Il est lié à la propriété `checked` de la balise `<input>` pour afficher l'état de la case à cocher.
> - Ensuite, on passe en argument l'`id`, le `checked`, la fonction `onChange` et le `label` dans le composant `Checkbox` pour l'utiliser dans le composant parent.
> - On utilise la balise `<label>` pour associer le texte à la case à cocher.
> - L'attribut `htmlFor` de la balise `<label>` doit correspondre à l'attribut `id` de la balise `<input>` pour que le texte soit cliquable.

## 6.4 Composant `ProductRow`
```jsx
export function ProductRow({product}) {

    const style = product.stocked ? undefined : { color: 'red' }

    return <tr>
        <td style={style}>
            {product.name}
        </td>
        <td>
            {product.price}
        </td>
    </tr>
}
```
> - `product` : objet représentant un produit
> - Ici, on utilise un composant fonctionnel pour afficher une ligne de produit dans un tableau.
> - On applique un style rouge au nom du produit si le produit n'est pas en stock.
> - Ensuite, on passe en argument le `product` dans le composant `ProductRow` pour l'utiliser dans le composant parent.
> - La balise `<tr>` est là pour définir une ligne dans un tableau.
> - La balise `<td>` est là pour définir une cellule dans une ligne.
> - La propriété `style` est là pour appliquer un style CSS à un élément.
> - L'opérateur `ternaire` est là pour définir le style en fonction de l'état du produit.
> - La propriété `product.name` est là pour afficher le nom du produit.
> - La propriété `product.price` est là pour afficher le prix du produit.
> - On utilise la propriété `product.stocked` pour déterminer si le produit est en stock ou non.

## 6.5 Composant `ProductTable`
```jsx
import {ProductCategoryRow} from "./ProductCategoryRow.jsx";
import {ProductRow} from "./ProductRow.jsx";

export function ProductTable({products}) {
    const rows = [];
    let lastCategory = null;

    for(let product of products) {
        if (product.category !== lastCategory){
            rows.push(<ProductCategoryRow key={product.category} name={product.name} />)
        }
        lastCategory = product.category;
        rows.push(<ProductRow product={product} key={product.name}  />)
    }

    return <>

        <style>
            {`
            table {
                border-collapse: collapse;
                width: 100%;
            }
            th, tr, td {
                border: 1px solid black;
                padding: 8px;
                text-align: center;
            }
            `}
        </style>

        <table>
            <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    </>;
}
```
> - `products` : tableau d'objets représentant des produits
> - Ici, on utilise un composant fonctionnel pour afficher un tableau de produits.
> - On importe les composants `ProductCategoryRow` et `ProductRow` pour afficher les catégories et les produits.
> - On parcourt le tableau de produits pour créer les lignes du tableau qu'on stocke dans un tableau `rows`.
> - On utilise la variable `lastCategory` pour stocker la dernière catégorie traitée.
> - On compare la catégorie du produit avec la dernière catégorie traitée pour afficher une ligne de catégorie si nécessaire.
> - Ensuite, on passe en argument les `products` dans le composant `ProductTable` pour l'utiliser dans le composant parent.
> - La balise `<style>` est là pour définir un style CSS local au composant.
> - La balise `<table>` est là pour définir un tableau HTML.
> - La balise `<thead>` est là pour définir l'en-tête du tableau.
> - La balise `<tbody>` est là pour définir le corps du tableau.
> - La balise `<tr>` est là pour définir une ligne dans un tableau.
> - La balise `<th>` est là pour définir une cellule d'en-tête dans une ligne.
> - La balise `<td>` est là pour définir une cellule dans une ligne.

## 6.6 Composant `ProductCategoryRow`
```jsx
export function ProductCategoryRow({name}) {

    return <tr>
        <th colSpan="2">
            {name}
        </th>
    </tr>
}
```
> - `name` : nom de la catégorie
> - Ici, on utilise un composant fonctionnel pour afficher une ligne de catégorie dans un tableau.
> - Ensuite, on passe en argument le `name` dans le composant `ProductCategoryRow` pour l'utiliser dans le composant parent.
> - La propriété `colSpan` est là pour fusionner les cellules d'une ligne sur plusieurs colonnes.

## 6.7 Composant `SearchBar`
```jsx
import {Checkbox} from "./Checkbox.jsx";
import {InputSearch} from "./InputSearch.jsx";

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {

    return <div style={{border: '1px solid black', padding: '20px', marginTop: '20px'}} >
            <InputSearch value={search} onChange={onSearchChange} placeholder={'Faire une recherche...'}/>
            <Checkbox id="stocked" checked={showStockedOnly} onChange={onStockedOnlyChange} label={'Filtré uniquement les produits disponible'} />
        </div>
}

export default SearchBar;
```
> - `showStockedOnly` : état de la case à cocher pour filtrer les produits en stock
> - `onStockedOnlyChange` : fonction appelée lors du changement d'état de la case à cocher
> - `search` : valeur du champ de recherche pour filtrer les produits
> - `onSearchChange` : fonction appelée lors de la saisie dans le champ de recherche pour écouter les changements de valeur
> - Ici, on utilise un composant fonctionnel pour afficher une barre de recherche avec une case à cocher.
> - On importe les composants `Checkbox` et `InputSearch` pour afficher les éléments de la barre de recherche.
> - Ensuite, on passe en argument les `showStockedOnly`, `onStockedOnlyChange`, `search` et `onSearchChange` dans le composant `SearchBar` pour l'utiliser dans le composant parent.

## 6.8 Le composant parent `App`
```jsx
function App() {

    const [showStockedOnly, setShowStockedOnly] = useState(false);
    const [search, setSearch] = useState('');

    const visibleProducts = PRODUCTS.filter(product => {
        if (showStockedOnly && !product.stocked) {
            return false
        }

        return !(search && !product.name.includes(search));

    })

        return <>
     <SearchBar
         search={search}
         onSearchChange={setSearch}
         showStockedOnly={showStockedOnly}
         onStockedOnlyChange={setShowStockedOnly}
     />
     <ProductTable products={visibleProducts}/>
 </>
}

export default App;
```
> - Ici, on utilise le composant par défaut `App` pour afficher l'application.
> - Dans notre cas le composant `App` est le composant parent qui contient les composants `SearchBar` et `ProductTable`.
> - On utilise le `hook` `useState` pour gérer l'état de la case à cocher `showStockedOnly` et la valeur du champ de recherche `search`.
> - On filtre les produits en fonction de l'état de la case à cocher et de la valeur du champ de recherche pour afficher les produits correspondants.
> - Ensuite, on passe en argument les `search`, `onSearchChange`, `showStockedOnly` et `onStockedOnlyChange` dans le composant `SearchBar` pour l'utiliser dans le composant parent.
> - Ensuite, on passe en argument les `visibleProducts` dans le composant `ProductTable` pour l'utiliser dans le composant parent.
> - On exporte le composant `App` par défaut pour l'utiliser dans d'autres fichiers.
> - On utilise la balise `<></>` pour définir un fragment qui permet de retourner plusieurs éléments sans les encapsuler dans une balise.

## 6.9 Conclusion
> - Dans cet exercice, nous avons créé un tableau de produits avec des catégories, des prix et des stocks.
> - Nous avons affiché les produits dans un tableau HTML avec des composants pour les catégories, les produits, la barre de recherche et la case à cocher.
> - Nous avons ajouté un champ de recherche pour filtrer les produits par nom et une case à cocher pour filtrer les produits en stock.
> - Nous avons divisé le tableau en plusieurs composants pour faciliter la gestion et la réutilisation du code.
