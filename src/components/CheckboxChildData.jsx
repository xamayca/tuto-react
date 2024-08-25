import { useState } from 'react';

function CheckBoxChildData() {

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return <>
        <div style={{border: '1px solid black', padding: '20px', margin: '20px'}}>
            <h1>CheckBoxChildData</h1>
            <label>
                <input type="checkbox" checked={isChecked} onChange={handleChange}/>
                Are you a human?
            </label>
        </div>
    </>;
}

export default CheckBoxChildData;