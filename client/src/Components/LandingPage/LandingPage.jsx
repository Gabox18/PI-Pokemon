import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getAllPokes,getTypes } from "../../Redux/actions";
import {Link} from 'react-router-dom'
import imgLanding from '../../Img/Landing_pokemon.png'

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
            <img src={imgLanding} alt="fondo" width='650px' /><br />
            <Link to={'/home'}><button>Go To Pokemons</button></Link>
        </div>
    )
}

export default LandingPage