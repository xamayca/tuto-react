import TodoList from "./components/TodoList.jsx";
import CountButton from './components/CountButton.jsx'
import Form from './components/Form.jsx'

function App() {

 return <>
    <Title color="green">Mon composant personalisé</Title>
    <Title color="red" hidden={true}>Mon composant personalisé rouge qui conditioné hidden</Title>
    <Title color="blue">Mon composant personalisé bleu conditioné bleu</Title>
    <TodoList />
    <CountButton />
    <Form />
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
