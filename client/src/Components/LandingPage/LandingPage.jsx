
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
import "./LandingPage.css"

function LandingPage (props){
    return(
        <div className="div_landing">
            <h1>Poke APP</h1>
            <div className="div_button_landing">
                <Link to={'/home'}><button className="btn">Go To Pokemons</button></Link>
            </div>
            <div className="div_landing_footer">
                <Footer/>
            </div>
        </div>
    )
}

export default LandingPage