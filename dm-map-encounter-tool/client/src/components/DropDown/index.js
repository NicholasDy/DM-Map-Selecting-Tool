function DropDown([props]) {
    
    return (
        <label className="m-2">
            Type of location
            <select>
                <option value="tavern"> {props}</option>
                <option value="woodland"> Woodland</option>
                <option value="plain"> Plain</option>
            </select>
        </label>
    )
}


export default DropDown
