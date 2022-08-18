//import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom"
//import {getAllPokes,} from '../../redux/actions.js'
import CartPokes from '../CartPokes/CartPokes.jsx'
//import Paginado from "../paginado/paginado.jsx"
//import './home.css'

//import Navbar from "../nav/nav.jsx"


function Home (props){
    const pokes = useSelector((state)=>state.Pokes)
    //const dispatch = useDispatch()

    // useEffect(()=>{
    //     if(!juegosActuales.length){
    //         setTimeout(()=>{
    //             dispatch(getAllGames())
    //             dispatch(getGenres())
    //         },1000)  
    //     }
    // },[dispatch, juegosActuales.length])
  
    return(
        <div>
            <div className="div_Home_container">
                {pokes?.map((e) => {
                    return (
                        <div key={e.id} className ='card_home'>
                            <Link to={`home/Pokemon/${e.id}`} >
                                <CartPokes name={e.name} img={e.background_image} types={e.types?.map(g => g.name)} />
                            </Link>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Home