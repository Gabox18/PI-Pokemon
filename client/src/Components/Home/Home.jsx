import {  useEffect, useState } from "react"
import { useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom"
import {getTypes,getAllPokes} from "../../Redux/actions.js"
import CardPokes from '../CardPokes/CardPokes.jsx'
import Paginado from "../paginado/paginado.jsx"
import Navbar from "../NavBar/NavBar.jsx"
import SubNavbar from "../SubNavbar/SubNavbar.jsx"
import './Home.css'



function Home (props){
    const pokes = useSelector((state)=>state.Pokes)
    const types = useSelector((state)=>state.AllTypes)
    const dispatch = useDispatch()

    //-----------------logica paguinado------------------------
    const [paginaActual,setPaginaActual] = useState(1)
    //const [cartasPorPagina,setcartasPorPagina] = useState(15)
    const cartasPorPagina = 12
    const indexUltimaCarta = paginaActual * cartasPorPagina
    const indexPrimeraCarta = indexUltimaCarta - cartasPorPagina
    const cartasActuales = pokes?.slice(indexPrimeraCarta,indexUltimaCarta)
    
    const paginado = (numeroDePagina)=>{
        setPaginaActual(numeroDePagina)
    }
    //-----------------logica paginado------------------------

    useEffect(()=>{
        if(!types.length) {
            dispatch(getTypes())
            dispatch(getAllPokes())
        }
    },[dispatch, types])
    
    return (
        <div className="container_p">
            <div>
                <Navbar/>
            </div>
            <div>
                <SubNavbar  paginado={paginado}/>
            </div>
            <div className="div_Home_container">
                {cartasActuales?.map((e) => {
                    return (
                        <div key={e.id} className='card_home'>
                            <Link to={`home/Pokemon/${e.id}`} >
                                <CardPokes name={e.name} img={e.background_image} img2={e.background_image_2} types={e.types?.map(t => t)} />
                            </Link>
                        </div>)
                })}
            </div>
            <div className="div_container_paginado">
                <Paginado cartasPorPagina={cartasPorPagina} allPokes={pokes.length} paginado={paginado} />
            </div>
        </div>
    )
}

export default Home