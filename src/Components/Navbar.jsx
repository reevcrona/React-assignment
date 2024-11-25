import {Link,useLocation} from "react-router-dom";
import "../styles/Navbar.css"



function Navbar(){

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link 
                        to ="/"
                        className={isActive("/") ? "active":""}
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        to ="/albums"
                        className={isActive("/albums") ? "active":""}
                        >
                        Albums
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/counter"
                            className={isActive("/counter") ? "active":""}
                        >
                        Counter
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/color-picker"
                            className={isActive("/color-picker") ? "active":""}
                        >
                        Color Picker
                        </Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
            
        
    )
}

export default Navbar;