import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getAllPokes,getTypes } from "../../Redux/actions";
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
import "./LandingPage.css"

function LandingPage (props){

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPokes())
        dispatch(getTypes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return(
        <div className="div_landing">
            <h1>Henry Pokemon</h1>
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