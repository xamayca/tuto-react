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