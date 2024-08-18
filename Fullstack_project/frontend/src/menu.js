import { Link } from "react-router-dom";

function Menu(){
    return(
        <center>
            <div id="navbar">
                {/* <Link className="navbaricon" to="/Home">HOME</Link> */}
                <Link className="navbaricon" to='/Class'>CLASS</Link>
                <Link className="navbaricon" to='/Arrow Function'>ARROWFUNCTION</Link>
                <Link className="navbaricon" to='/Image'>IMAGE</Link>
                {/* <Link className="navbaricon" to='/Map'>MAP</Link> */}
                {/* <Link className="navbaricon" to='/About'>ABOUT</Link> */}
                <Link className="navbaricon" to='/Student'>STUDENT</Link>
                <Link className="navbaricon" to='/Click Event'>CLICKEVENT</Link>
                <Link className="navbaricon" to='/Mouse Over'>MOUSEOVER</Link>
                <Link className="navbaricon" to='/UseState'>USESTATE</Link>
                <Link className="navbaricon" to='/Bulb'>BULB</Link>
                <Link className="navbaricon" to='/Calculator'>CALCULATOR</Link>
            </div>

        </center>
    )
}

export default Menu