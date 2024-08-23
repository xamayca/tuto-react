function ChildComponent({ message, onChange }) {
    return (
        <div>
            <h2>Child Component</h2>
            <p>{message}</p>
            <button onClick={() => onChange('Hello from Child!')}>Change Message</button>
        </div>
    );
}

export default ChildComponent;