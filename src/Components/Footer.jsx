import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter,faFacebookF,faInstagram} from '@fortawesome/free-brands-svg-icons';

import "../styles/Footer.css";
function Footer(props){
    return (
        <footer style={{backgroundColor:props.color}}>
            <nav>
                <ul>
                    <li>
                        <a href=""><FontAwesomeIcon className="logo" icon={faXTwitter} /></a>
                    </li>
                    <li>
                        <a href=""><FontAwesomeIcon className="logo" icon={faFacebookF}/></a>
                    </li>
                    <li>
                        <a href=""><FontAwesomeIcon className="logo" icon={faInstagram} /></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;