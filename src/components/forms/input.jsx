/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onchange 
 * @returns 
 */

export function Input({placeholder,value,onchange}){
    return <div className="mt-3">
        <input type="text" className="form-control" placeholder={placeholder} value={value} onChange={(e) => onchange(e.target.value)}/>
    </div>
}