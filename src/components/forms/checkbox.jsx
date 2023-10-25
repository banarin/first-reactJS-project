/**
 * 
 * @param {boolean} checked 
 * @param {(s: boolean) => void} onchange 
 * @param {String} label 
 * @param {String} id 
 * @returns 
 */

export function Checkbox({checked,onchange,label,id}) {
    return <div className="form-check">
        <input id={id} type="checkbox" className="form-check-input" onChange={(e) => onchange(e.target.checked)}  checked={checked}/>
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}