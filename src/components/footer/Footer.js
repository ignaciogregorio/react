
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import './Footer.scss';




export const Footer = () => {


    return(

        <div className='footer-container'>
            <p>peaky.wines@gmail.com</p>
            <p>&copy; 2021 Ignacio Gregorio</p>
            <div className='footer-socialMedia' style={{fontSize: "2em", color: "white"}}>
                <a className='instagram' href="https://www.instagram.com/" target="blank">
                    <FontAwesomeIcon  icon={faInstagram}/>
                </a>
                <a className='whatsapp' href="https://web.whatsapp.com/" target="blank">
                    <FontAwesomeIcon className='whatsapp' icon={faWhatsapp}/>
                </a>
            </div>
        </div>


    )
}
