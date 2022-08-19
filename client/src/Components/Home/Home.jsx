import {  useState } from "react"
import { useSelector} from 'react-redux'
import { Link } from "react-router-dom"
import CartPokes from '../CartPokes/CartPokes.jsx'
import Paginado from "../paginado/paginado.jsx"
import Navbar from "../Nav/Nav.jsx"
//import './home.css'


function Home (props){
    const pokes = useSelector((state)=>state.Pokes)

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

    return (
        <div>
            <div>
                <Navbar  paginado={paginado}/>
            </div>
            <div className="div_Home_container">
                {cartasActuales?.map((e) => {
                    return (
                        <div key={e.id} className='card_home'>
                            <Link to={`home/Pokemon/${e.id}`} >
                                <CartPokes name={e.name} img={e.background_image} types={e.types?.map(t => t)} />
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