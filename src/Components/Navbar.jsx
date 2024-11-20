import {Link} from "react-router-dom";
import "../styles/Navbar.css"

function Navbar(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to ="/">Home</Link>
                    </li>
                    <li>
                    <Link to ="/albums">Albums</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;