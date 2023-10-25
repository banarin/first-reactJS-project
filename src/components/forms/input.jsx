/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onchange 
 * @returns 
 */

export function Input({ placeholder, value, onChange }) {
    return (
        <div className="mt-3">
            <input type="text" className="form-control" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}
