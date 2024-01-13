import { selectComponentType,selectType } from "./select.type"
import './style.css'
const Select = ({ submit, value, changeValues, name, arr }: selectComponentType) => {
    return (<>
        <label ></label>
        <select className="selectFields" required={submit} value={value} onChange={(e) => changeValues(name, e.target.value)}>
            <option  value={''}>Select {name}</option>
            {arr?.length && arr.map((item:selectType) => <option value={item.id}>{item.name}</option>)}

        </select><br />
        {submit && !value && <span className="error">Please select valid {name}</span>}
    </>)
}
export default Select