import API from "../../utils/API";

function StatBlock(props) {
    // passing the result of the submit to the component and rendering the call here for the api
    // const [creatureSelected, setCreatureSelected] = useState();

    // const callNPC = await API.statBlockPull(selections.typeNPC)



    const { block } = props;
    const { data } = block

    const actions = data.actions
    const mapedActions = data.actions.map((actions) =>
        <>
            <h4>{actions}</h4><span> </span>
            <p>{actions}</p>
        </>

    )


    console.log(block)
    return (

        <div className="statBody">
            <div className="creature-heading">
                <h1>{data.name}</h1>
                <h2>{data.size}, {data.alignment}</h2>
            </div>
            <div className="stat-block">
                <hr className="orange-border" />
                <div className="section-left">
                    <div className="creature-heading">
                        <h1></h1>
                        <h2>{data.size}</h2>
                    </div> {/*} creature heading */}
                    <svg height="5" width="100%" className="tapered-rule">
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    <div className="top-stats">
                        <div className="property-line first">
                            <h4>Armor Class</h4><span> </span>
                            <p>{data.armor_class}</p>
                        </div> {/*} property line */}
                        <div className="property-line">
                            <h4>Hit Points</h4> <span> </span>
                            <p>{data.hit_points} ({data.hit_dice})</p>
                        </div> {/*} property line */}
                        <div className="property-line last">
                            <h4>Speed</h4><span> </span>
                            <p>{data.speed.walk}</p>
                        </div> {/*} property line */}
                        <svg height="5" width="100%" className="tapered-rule">
                            <polyline points="0,0 400,2.5 0,5"></polyline>
                        </svg>
                        <div className="abilities">
                            <div className="ability-strength">
                                <h4>STR</h4>
                                <p>{data.strength}</p>
                            </div> {/*} ability strength */}
                            <div className="ability-dexterity">
                                <h4>DEX</h4>
                                <p>{data.dexterity}</p>
                            </div> {/*} ability dexterity */}
                            <div className="ability-constitution">
                                <h4>CON</h4>
                                <p>{data.constitution}</p>
                            </div> {/*} ability constitution */}
                            <div className="ability-intelligence">
                                <h4>INT</h4>
                                <p>{data.intelligence}</p>
                            </div> {/*} ability intelligence */}
                            <div className="ability-wisdom">
                                <h4>WIS</h4>
                                <p>{data.wisdom}</p>
                            </div> {/*} ability wisdom */}
                            <div className="ability-charisma">
                                <h4>CHA</h4>
                                <p>{data.charisma}</p>
                            </div> {/*} ability charisma */}
                        </div> {/*} abilities */}
                        <svg height="5" width="100%" className="tapered-rule">
                            <polyline points="0,0 400,2.5 0,5"></polyline>
                        </svg>
                        {/* These are going to require a map function that runs over all of the different immunities or the conditions 
                        <div className="property-line first">
                            <h4>Damage Immunities</h4>
                            <p>poison, psychic</p> 
                        </div>
                        <div className="property-line">
                            <h4>Condition Immunities</h4>
                            <p>blinded, charmed, deafened, exhaustion, frightened,
                                petrified, poisoned</p>
                        </div>  */}
                        <div className="property-line">
                            <h4>Senses</h4><span> </span>
                            <p>{data.senses.darkvision} <br />
                                Passive percepion:<span> </span>{data.senses.passive_perception}</p>
                        </div> {/*} property line */}
                        <div className="property-line">
                            <h4>Languages</h4> <span>- </span>
                            <p>{data.languages}</p>
                        </div>
                        <div className="property-line last">
                            <h4>Challenge</h4> <span> </span>
                            <p>{data.challenge_rating} ({data.xp} xp)</p>
                        </div> {/*} property line */}
                    </div> {/*} top stats */}
                    <svg height="5" width="100%" className="tapered-rule">
                        <polyline points="0,0 400,2.5 0,5"></polyline>
                    </svg>
                    {/* this is going to need another map */}

                    <div className="property-block">

                    </div>
                    <div className="property-block">
                        <h4>{data.special_abilities[0].name}</h4><span> </span>
                        <p>{data.special_abilities[0].desc}</p>
                    </div>

                </div> {/*} section left */}
                <div className="section-right">
                    <div className="actions">
                        {/* {mapedActions} */}
                        <h3>Actions</h3>
                        <div className="property-block">
                            <h4>Multiattack.</h4>
                            <p>The armor makes two melee attacks.</p>
                        </div> {/*} property block */}
                        <div className="property-block">
                            <h4>Slam.</h4>
                            <p><i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one target.
                                <i>Hit:</i> 5 (1d6 + 2) bludgeoning damage.</p>
                        </div> {/*} property block */}
                    </div> {/*} actions */}
                    <div className="actions">
                        <h3>Legendary Actions</h3>
                        <div className="property-block">
                            <h4>Multiattack.</h4>
                            <p>The armor makes two melee attacks.</p>
                        </div> {/*} property block */}
                        <div className="property-block">
                            <h4>Slam.</h4>
                            <p><i>Melee Weapon Attack:</i> +4 to hit, reach 5 ft., one target.
                                <i>Hit:</i> 5 (1d6 + 2) bludgeoning damage.</p>
                        </div> {/*} property block */}
                    </div> {/*} actions */}
                </div> {/*} section right */}
                <hr className="orange-border bottom" />
            </div> {/*} stat block */}
        </div >


    )
};

export default StatBlock;