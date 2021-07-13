import draglogo from "../../images/dragonlogo.png"


function Footer() {
    return (
        <footer className=" footerDiv bottomft d-flex justify-content-between ">
            <div className="m-4 oval d-flex justify-content-center align-items-end">
                <img src={draglogo} alt="Dragon Logo for DnD" className="d-inline-block align-text-top h1" width="50px" href="/" />
            </div>
            <div className="m-4">
                <div className="d-flex">
                    <ul className="rounded text-light m-2 p-2">
                        <li>Contact Me:</li>
                        <li>Linkdin: <a className="linkfont" href="https://www.linkedin.com/in/nicholas-dyke/" target="blank">Personal Linkdin</a></li>
                        <li>Github: <a className="linkfont" href="https://github.com/NicholasDy" target="blank">Github Profile</a></li>
                    </ul>
                    <ul className="rounded text-light m-2 p-2">
                        <li>Quick List:</li>
                        <li><a className="linkfont" href="/">Home</a></li>
                        <li><a className="linkfont" href="/encounter">Encounter</a></li>
                        <li><a className="linkfont" href="/upload">Upload</a></li>
                        <li><a className="linkfont" href="/login">Login</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer