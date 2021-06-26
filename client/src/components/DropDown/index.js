
function DropDown(props) {

    return (
        <select onChange={props.handleSelect} name={props.name} >
            {props.options.map(option => (
                <option
                    key={option}
                    value={option}
                >
                    {option}
                </option>
            ))}
        </select>
    )
}


export default DropDown
