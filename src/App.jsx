import TodoList from "./components/TodoList.jsx";
import CountButton from './components/CountButton.jsx'
import Form from './components/Form.jsx'
import ParentComponent from "./components/ParentComponent.jsx";
import SearchBar from "./components/product/SearchBar.jsx";
import {ProductTable} from "./components/product/ProductTable.jsx";
import {useState} from "react";
import {InputTextWithCooldown} from "./components/useeffects/inputTextWithCooldown.jsx";
import {SquareCalculator} from "./SquareCalculator.jsx";

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
     <Title color="green">Mon composant personalisé</Title>
     <Title color="red" hidden={true}>Mon composant personalisé rouge qui conditioné hidden</Title>
     <Title color="blue">Mon composant personalisé bleu conditioné bleu</Title>
     <TodoList />
     <CountButton />
     <Form />
     <ParentComponent />
     <SearchBar
         search={search}
         onSearchChange={setSearch}
         showStockedOnly={showStockedOnly}
         onStockedOnlyChange={setShowStockedOnly}
     />
     <ProductTable products={visibleProducts}/>
     <InputTextWithCooldown />
     <SquareCalculator />
 </>
}

function Title({color, children, hidden}) {
    if (hidden) {
        return null
    }
    if (color === 'blue') {
        return null
    }
    return <h1 style={{color: color}}>{children}</h1>
}

export default App
