function TodoList(){

    const todos = [
        'Cree un site React',
        'Faire un gateau',
        'Aller au travail'
    ]

    return <>
        <h1>Todo List</h1>
        <ul>
            {todos.map(todo => (<li key={todo}>{todo}</li>))}
        </ul>
    </>

}

export default TodoList