import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getAllPokes,getTypes } from "../../Redux/actions";
import {Link} from 'react-router-dom'
import imgLanding from '../../Img/pokemon.png'

function LandingPage (props){

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPokes())
        dispatch(getTypes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return(
        <dir>
            <h1>Henry Pokemon</h1>
            <img src={imgLanding} alt="fondo" width='650px'/><br />
            <Link to={'/home'}><button>Go To Pokemons</button></Link>
        </dir>
    )
}

export default LandingPage