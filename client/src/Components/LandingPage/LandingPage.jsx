import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getAllPokes } from "../../Redux/actions";
import {Link} from 'react-router-dom'
import imgLanding from '../../Img/pokemon.png'

function LandingPage (props){

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPokes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return(
        <dir>
            <h1>Henry Pokemon</h1>
            <img src={imgLanding} alt="fondo" width='650px'/><br />
            <Link to={'/home'}><button>Start Game</button></Link>
        </dir>
    )
}

export default LandingPage