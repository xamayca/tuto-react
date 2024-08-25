export function InputSearch({placeholder, value, onChange}) {

    return <input
            type="text"
            value={value}
            placeholder={placeholder}
            style={{ width: '100%' }}
            onChange={(e) => onChange(e.target.value)}
        />
}