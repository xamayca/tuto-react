import { useState } from 'react';
import ChildComponent from './ChildComponent.jsx';

function ParentComponent() {
    const [message, setMessage] = useState('Hello from Parent!');

    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent message={message} onChange={setMessage} />
        </div>
    );
}

export default ParentComponent;