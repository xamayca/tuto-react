function ChildComponent({ message, onChange }) {

    const handleClick = () => {
        onChange('Hello from Child!');
    };

    return (
        <div>
            <h2>Child Component</h2>
            <p>{message}</p>
            <button onClick={handleClick}>Change Message</button>
        </div>
    );
}

export default ChildComponent;