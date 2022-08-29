import React from "react";
import linkedin from '../../Img/Contact/linkedin.png'
import github from '../../Img/Contact/github.png'
import gmail from '../../Img/Contact/gmail.png'
import './Footer.css'

function Footer (){
    return (
        <footer>
            <div className="section" id="contacts">
            <h3><span>Contacto</span></h3>
            <div>
                <a href="https://www.linkedin.com/in/gabriel-ferrer-b25639224/" target="_blank" rel="noreferrer">
                    <img alt="linkedin" src={linkedin} />
                </a>
                <a href="https://github.com/Gabox18" target="_blank" rel="noreferrer">
                    <img alt="github" src={github}/>
                </a>
                <a href="mailto:gefv191@gmail.com?Subject=Buenas%20te%20Contacto%20por%20Proyecto%20de%20Pokemon" target="_blank" rel="noreferrer">
                    <img alt="gmail" src={gmail} />
                </a>
            </div>
            <div className="copyright">
                &copy; 2022 Individual Project - Gabriel Ferrer.
            </div>
        </div>

        </footer>
    )
}

export default Footer
