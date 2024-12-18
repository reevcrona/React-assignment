import {Link,useLocation} from "react-router-dom";
import "../styles/Navbar.css"



function Navbar(props){

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return(
        <header style = {{backgroundColor:props.color}}>
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
                    <li>
                        <Link 
                            to="/to-do-list"
                            className={isActive("/to-do-list") ? "active":""}
                        >
                        To do list
                        </Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
            
        
    )
}

export default Navbar;