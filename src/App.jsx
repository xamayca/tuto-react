const todos = [
    'Cree un site React',
    'Faire un gateau',
    'Aller au travail'
]

function App() {



 return <>
     <Title color="green">Mon composant personalisé</Title>
     <input type="text"/>
     <ul>
         {todos.map(todo => (<li key={todo}>{todo}</li>))}
     </ul>




 </>
}

function Title({color, children, hidden}) {
    if (hidden) {
        return null
    }
    return <h1 style={{color: color}}>{children}</h1>
}

export default App
