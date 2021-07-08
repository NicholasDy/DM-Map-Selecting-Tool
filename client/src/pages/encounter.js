import React, { useState, useEffect } from "react";
import DropDown from "../components/DropDown";
import API from "../utils/API";
import { Image } from 'cloudinary-react';
import StatBlock from "../components/Stat Block";

function Encounter() {
    const [selections, setSelections] = useState({ location: "Tavern", npcNum: 1, typeNPC: "goblin" });
    const [selectedMap, setSelectedMap] = useState();
    const [block, setBlock] = useState(null);
    // const [locations, setLocations] = useState([]);

    const locations = [
        "Tavern",
        "Woodland",
        "Plains",
    ]

    const npcNums = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ]

    const typeNPC = [
        "Goblin",
        "Bandit",
        "Orc",
        "Dire Wolf",
        "Brown Bear",

    ]

    let statObject = {}
    // const [terrains, setTerrains] = useState([]) 
    // api call for the terrain 
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

    // useEffect(() => {
    //     
    //     return () => {
    //         cleanup
    //     }
    // }, [creatureSelected])

    const styleBox = {
        height: "500px",
    }

    const handleInputChange = event => {
        console.log("hi")
        setSelections({
            ...selections,
            [event.target.name]: event.target.value
        })
        console.log(selections)
    }

    const handleSubmit = async () => {
        try {
            console.log(selections)
            const callImage = await API.imagePull(selections.location)
            renderImage(callImage.data)
        } catch (error) {
            console.log(error)
        }
    }

    const callNPC = async () => {
        try {
            const stat = await API.statBlockPull(selections.typeNPC)
            setBlock(stat)
        } catch (error) {
            console.log(error)
        }
    }

    const renderImage = (selectedMap) => {
        let min = Math.ceil(0);
        let max = Math.floor(selectedMap.length);
        const randomSelected = Math.floor(Math.random() * (max - min))
        setSelectedMap(selectedMap[randomSelected])
        console.log("image loaded")
    }


    // function inputChange() {
    //     //going to change the options field to a 
    // }
    return (
        <div>
            <div className="border border-4 border-dark m-3 p-2">
                <h2>Map Finder</h2>
                <p>
                    Put in the location you are looking for, the number of NPC's (none playable characters) & the type of NPC. Your random map will appear in the space below.
                </p>
            </div>
            <div className="container p-3">
                <div className="d-flex justify-content-around mb-4">
                    <label className="m-2">
                        Type of location:<span> </span>
                        <DropDown
                            options={locations}
                            handleSelect={handleInputChange}
                            name="location"
                        />
                    </label>
                    <label className="m-2">
                        {/* going to try and get it the same as Amazon's input change */}
                        Number of NPC's:<span> </span>
                        <DropDown
                            options={npcNums}
                            handleSelect={handleInputChange}
                            name="npcNum"
                        />
                        {/* <option onClick={inputChange} > 9+</option> going to have the option to have more than 9 */}
                    </label>
                    <label className="m-2">
                        {/* going to try and get it the same as Amazon's input change */}
                        Type of NPC:<span> </span>
                        <DropDown
                            options={typeNPC}
                            handleSelect={handleInputChange}
                            name="typeNPC"
                        />
                        {/* <option onClick={inputChange} > 9+</option> going to have the option to have more than 9 */}
                    </label>
                    <input type="submit" value="Submit" onClick={() => {
                        handleSubmit();
                        callNPC();
                    }} />
                </div>
                <div style={styleBox} className="border border-4 border-dark w-75 mx-auto mapcontainer mb-4">
                    <Image
                        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                        publicId={selectedMap}
                        width="100%"
                        height="100%"
                    />
                </div>
                {block &&
                    <div>
                        <div>
                            <h3>Stat Block for NPC</h3>
                        </div>
                        <div>
                            {/* location of rendered stat blocks */}
                            <StatBlock
                                options={selections.typeNPC}
                                block={block}
                            />
                        </div>
                    </div>
                }


            </div>

        </div>

        //     // adding in a zoom in feature for the images when they are rendered onto the screen
    )
}
export default Encounter