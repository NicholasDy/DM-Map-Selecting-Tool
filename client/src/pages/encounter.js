import React, { useState, useEffect } from "react";
import DropDown from "../components/DropDown";
import API from "../utils/API";


function Encounter() {
    const [selections, setSelections] = useState({ location: "Tavern", npcNum: 1 });
    const [imageIds, setImageIds] = useState();
    // const [locations, setLocations] = useState([]);

    const locations = [
        "Tavern",
        "Woodland",
        "Plains",
    ]

    const npcNums = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ]

    useEffect(() => {
        API.terrainAPI()
            .then(res => {
                console.log(res)
            })
        // when the compoment drop mounts we want to set the default art to 0 index on locations and hard code the npcNums 
        // effect
        // return () => {
        //     cleanup
        // }
    }, [])

    // const [terrains, setTerrains] = useState([])
    // api call for the terrain 

    const styleBox = {
        height: "500px",
    }

    const handleInputChange = event => {
        console.log("hi")
        setSelections({
            ...selections,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async () => {
        try {
            console.log(selections)
            switch (selections.location) {
                case "Tavern":
                    console.log('Tavern')
                    const callImage = await API.imagePull(selections.location)
                    console.log(callImage.data)
                default:
                    return
            }
        } catch (error) {
            console.log(error)
        }
    }

    function inputChange() {
        //going to change the options field to a 
    }
    return (
        <div>

            <p>Place holder as the encounter form and layout is going to go here</p>
            <div className="container">
                <label className="m-2">
                    Type of location:
                    <DropDown
                        options={locations}
                        handleSelect={handleInputChange}
                        name="location"
                    />
                </label>
                <label className="m-2">
                    {/* going to try and get it the same as Amazon's input change */}
                    Number of NPC's:
                    <DropDown
                        options={npcNums}
                        handleSelect={handleInputChange}
                        name="npcNum"
                    />
                    {/* <option onClick={inputChange} > 9+</option> going to have the option to have more than 9 */}
                </label>
                <input type="submit" value="Submit" onClick={handleSubmit} />
            </div>
            <div style={styleBox} className="border border-dark w-75 mx-auto ">

            </div>

        </div>

        //     // adding in a zoom in feature for the images when they are rendered onto the screen
    )
}
export default Encounter