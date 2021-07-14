import React from "react"
import { Carousel } from "react-bootstrap";
import redImage from "../images/redditimage.PNG";
import dndImage from "../images/dungeond-and-dragons-books-1146037.jpeg";
import placeHolder from "../images/team-placeholder.png";
import tavernEx from "../images/tavern-ex.jpg";
import plainsex from "../images/plains-ex.jpg";

function Home() {
    return (
        <>
            <div className="carousel">
                <Carousel className="m-3 ">
                    {/* adding the div to help control the sizing of the area */}
                    <Carousel.Item >
                        <a href="https://www.reddit.com/r/dndmaps/" target="_blank" rel="noopener noreferrer">
                            <img
                                className="d-block mw-100 imgCar"
                                src={redImage}
                                alt="First slide"
                            />
                        </a>
                        <Carousel.Caption className="bg-secondary rounded">
                            <a href="https://www.reddit.com/r/dndmaps/" target="_blank" rel="noopener noreferrer" className="nounderline">
                                <h3 className="text-light">Look for your new maps from any source</h3>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex justify-content-center">
                            <a href="https://dnd.wizards.com/" target="_blank" rel="noopener noreferrer">
                                <img
                                    className="d-block mw-100 imgCar"
                                    src={dndImage}
                                    alt="Second slide"
                                />
                            </a>
                            <Carousel.Caption className="bg-secondary rounded">
                                <a href="https://dnd.wizards.com/" target="_blank" className="nounderline">
                                    <h3 className="text-light">Get more material here!</h3>
                                </a>
                            </Carousel.Caption>
                        </div>

                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="m-4 border border-dark border-4 rounded">
                <div className="titlebg p-2 m-2">
                    <h2 className="">
                        What is D&D Map Finder?
                    </h2>
                </div>
                <div className="centerCard m-2">
                    <p>
                        Part of the problem for any Dungeon Master when they are running their own campaign is what is the right map or location to use when you are running random encounters? Not everyone is gifted at creating a scene in their head and perfectly discribing the area to their players.
                    </p>
                    <p>
                        D&D Map Finder aims to help fix some of the problems that many people face by storing a random collection of maps in one place. Don't go searching the internet looking for maps when all you have to do is input the area you are looking for and a map will appear before you.
                    </p>
                    <p>
                        If you don't like what map you are given you can search again and a another map will appear based on the inputs you have selected.
                    </p>
                </div>
            </div>

            <div className="m-4 p-2 border border-dark border-4 d-flex flex-row justify-content-between rounded">
                <div className="w-75">
                    <h2 className="titlebg p-2">Find your map!</h2>
                    <p>Dynamically find the map you are looking for! With an ever expanding map pool our goal is to allow you to press a button and have the map that you are looking for instantly.</p>
                </div>
                <div className="p-3">
                    <img src={tavernEx}
                        width="300"
                        height="300"
                    />

                </div>
            </div>

            <div className="m-4 p-2 border border-dark border-4 d-flex flex-row justify-content-between rounded">
                <div className="p-3">
                    <img src={plainsex}
                        width="200"
                        height="200"
                    />
                </div>
                <div className="w-75">
                    <h2 className="titlebg p-2">Upload your favourite maps</h2>
                    <p>Find a map online that you think others are going to use? Upload it to our servers so everyone can enjoy!</p>
                </div>


            </div>

            <article className="m-4 p-2 border border-dark border-4 rounded">
                <h2 className="titlebg p-2">
                    What is next for D&D Map Finder?
                </h2>
                <p>
                    Right now we are planning on adding more categories such as the Underdark, cities, castles... you name it. As this is still in the testing phase the amount of categories are small so please be patient. The below sections are major additions we plan on adding to the app.
                </p>
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
                        When the map is loading onto the screen I want there to be an input so that you as a DM will be able to position your players dynamically onto the MAP.
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