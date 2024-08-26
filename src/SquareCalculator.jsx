import { useMemo, useState } from "react";

export function SquareCalculator() {
    const [number, setNumber] = useState("");

    const squaredNumber = useMemo(() => {
        console.log(`Calcul du carré de ${number}`);

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