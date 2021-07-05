import React from "react"
import { Carousel } from "react-bootstrap";
import redImage from "../images/redditimage.PNG"
import dndImage from "../images/dungeond-and-dragons-books-1146037.jpeg"

function Home() {
    return (
        <>
            <div className="carousel">
                <Carousel className="m-3 h-100">
                    <Carousel.Item >
                        <a href="https://www.reddit.com/r/dndmaps/" target="_blank">
                            <img
                                className="d-block mw-100  imgCar"
                                src={redImage}
                                alt="First slide"
                            />
                        </a>
                        <Carousel.Caption className="bg-secondary rounded">
                            <a href="https://www.reddit.com/r/dndmaps/" target="_blank" className="nounderline">
                                <h3 className="text-light">Look for your new maps from any source</h3>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <a href="https://dnd.wizards.com/" target="_blank">
                            <img
                                className="d-block w-100  imgCar"
                                src={dndImage}
                                alt="Second slide"
                            />
                        </a>
                        <Carousel.Caption className="bg-secondary rounded">
                            <a href="https://dnd.wizards.com/" target="_blank" className="nounderline">
                                <h3 className="text-light">Get more material here!</h3>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <h2>
                    What is D&D Map Finder?
                </h2>
                <p>
                    Part of the problem for any Dungeon Master when they are running their own campaign is what is the right map or location to use when you are running random encounters? Not everyone is gifted at creating a scene in their head and perfectly discribing the area to their players. 
                </p>
            </div>

            <article className="m-4 p-2 border border-dark border-4">
                <h2>
                    What is next for D&D Map Finder?
                </h2>
                <div>
                    <h3 className="" >
                        2.0 - NPC Tokens 
                    </h3>
                    <p>
                        When you input the number of NPC's into the encounter tab, the hope is that you will have NPC tokens that you can move onto the screen. This will help any DM to manage a large number of NPC's during combat. 
                    </p>
                </div>
                <div>
                    <h3 className="" >
                        3.0 - Player Tokens 
                    </h3>
                    <p>
                        When the map is loading onto the screen I want there to be an input so that you as a DM will be able to posistion your players dynamically on to the MAP. 
                    </p>
                </div>
                <div>
                    <h3 className="" >
                        4.0 - Collections
                    </h3>
                    <p>
                        With the collections tab, my goal is for each of the users to be able to save their favourite encounters. Then if they ever want to be able to refer back to the encounter the user will be able to have it render onto the page. 
                    </p>
                </div>
            </article>
            
        </>
    )
}

export default Home