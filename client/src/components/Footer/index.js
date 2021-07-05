import draglogo from "../../images/dragonlogo.png"


function Footer() {
    return (
        <footer className="d-flex justify-content-between h-10">
            <div className="m-4">
                <img src={draglogo} alt="Dragon Logo for DnD" className="d-inline-block align-text-top h1" width="50px" href="/" />

            </div>
            <div className="m-4">
                <div className="d-flex">
                    <ul className=" bg-secondary rounded text-light m-2 p-2">
                        <li>Contact Me</li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                    </ul>
                    <ul className=" bg-secondary rounded text-light m-2 p-2">
                        <li>Quick List</li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer