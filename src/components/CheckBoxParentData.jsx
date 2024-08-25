import { useState } from 'react';
import CheckBoxChildData from './CheckBoxChildData.jsx';

function CheckBoxParentData() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChildChange = (checked) => {
        setIsChecked(checked);
    };

    return (
        <div style={{ border: '1px solid black', padding: '20px', margin: '20px' }}>
            <h1>CheckBoxParentData</h1>
            <p>Is the child a human? {isChecked ? 'Yes' : 'No'}</p>
            <CheckBoxChildData isChecked={isChecked} onChildChange={handleChildChange} />
        </div>
    );
}

export default CheckBoxParentData;