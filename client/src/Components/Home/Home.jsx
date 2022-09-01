import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { getTypes, getAllPokes } from "../../Redux/actions.js"
import CardPokes from '../CardPokes/CardPokes.jsx'
import Paginado from "../paginado/paginado.jsx"
import Navbar from "../NavBar/NavBar.jsx"
import SubNavbar from "../SubNavbar/SubNavbar.jsx"
import Loader from "../Loader/Loader.jsx"
import Footer from "../Footer/Footer.jsx"
import './Home.css'



function Home(props) {
    const pokes = useSelector((state) => state.Pokes)
    const types = useSelector((state) => state.AllTypes)
    const PokesCopy = useSelector((state) => state.PokesCopy)
    const dispatch = useDispatch()

    //-----------------logica paguinado------------------------
    const [paginaActual, setPaginaActual] = useState(1)
    // eslint-disable-next-line no-unused-vars
    const [cartasPorPagina, setcartasPorPagina] = useState(12)
    //const cartasPorPagina = 12
    const indexUltimaCarta = paginaActual * cartasPorPagina
    const indexPrimeraCarta = indexUltimaCarta - cartasPorPagina
    const cartasActuales = pokes?.slice(indexPrimeraCarta, indexUltimaCarta)

    const paginado = (numeroDePagina) => {
        setPaginaActual(numeroDePagina)
    }
    //-----------------logica paginado------------------------

    useEffect(() => {
        if (!types.length) {
            dispatch(getTypes())
            dispatch(getAllPokes())
        }
    }, [dispatch, types.length])

    return (
        <div className="container_p">
            <div>
                <Navbar paginado={paginado} />
            </div>
            {PokesCopy.length
                ?<div>
                    <SubNavbar paginado={paginado} />
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
                </div>
                : <div className="div_loader">
                    <Loader />
                </div>}
            <div className="div_container_paginado">
                <Paginado cartasPorPagina={cartasPorPagina} allPokes={pokes.length} paginado={paginado} />
            </div>
            <Footer />
        </div>
    )
}

export default Home