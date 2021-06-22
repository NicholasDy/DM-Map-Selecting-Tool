import React from "react";
import DropDown from "../components/DropDown";

function Encounter() {
    // const [terrain, setTerrain] = useState([])
   
//    // how do I pass in the array
//     const terrain = [
//         "Tavern",
//         "Woodland",
//         "Plains"
//     ]

//     const npcNum = [

//     ];


    return (
        <div>
            <p>Place holder as the encounter form and layout is going to go here</p>
            <div className="container">
                {/* <DropDown props={[terrain]} /> */}
                <label className="m-2">
                    Location:
                    <select>
                        <option value="tavern"> Tavern</option>
                        <option value="woodland"> Woodland</option>
                        <option value="plain"> Plain</option>
                    </select>
                </label>
                <label className="m-2">
                    Number of NPC's:
                    <select>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </div>
        </div>

        // adding in a zoom in feature for the images when they are rendered onto the screen
    )
}
export default Encounter