import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import { getDetailsPoke,clearDetails } from "../../Redux/actions";
import imgCenter from '../../Img/título_info.png'
import './Details.css'

function Details (props){

   const {id} = useParams()
   const Dispatch = useDispatch()
   const detailsPoke = useSelector(state=>state.pokeDetail)

   useEffect(()=>{
    Dispatch(getDetailsPoke(id))
    return ()=>{
        Dispatch(clearDetails())
    }
   },[Dispatch, id])
   
    return(
        <div className="container_detailss">

            <div className="nav_comp_create">
                <div className="div_btn_go_home_create div_sub_info_create_1">
                    <Link to={'/home/Create'}>
                        <button className="create_btn">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Crear Pokemon
                            </span>
                        </button>
                    </Link>
                </div>
                <img src={imgCenter} alt="Logo_Pokemon" height='70px' />
            </div>

            <div className="card_details">
                <div className="card_load"><img src={detailsPoke.background_image} width='250px' height='300px' alt="Cover Game" className="img_details" /></div>
                <div className="card_load_extreme_title"><h1>{detailsPoke.name}</h1></div>
                <div className="card_load_extreme_descripion">
                    <div className="card_load_extreme_childre">
                        <div className="container-sub-info">
                            <h4 className="div-info-poke">Hp</h4><p className="div-value-poke">{detailsPoke.hp}</p>
                        </div>
                        <progress className="amount-progress" value={detailsPoke.hp} max="100"></progress>
                    </div>

                    <div className="card_load_extreme_childre">
                        <div className="container-sub-info">
                            <h4 className="div-info-poke">Ataque</h4><p className="div-value-poke">{detailsPoke.attack}</p>
                        </div>
                        <progress className="amount-progress" value={detailsPoke.attack} max="100"></progress>
                    </div>

                    <div className="card_load_extreme_childre">
                        <div className="container-sub-info">
                            <h4 className="div-info-poke">Defensa</h4><p className="div-value-poke">{detailsPoke.defense}</p>
                        </div>
                        <progress className="amount-progress" value={detailsPoke.defense} max="100"></progress>
                    </div>

                    <div className="card_load_extreme_childre">
                        <div className="container-sub-info">
                            <h4 className="div-info-poke">Velocidad</h4><p className="div-value-poke">{detailsPoke.speed}</p>
                        </div>
                        <progress className="amount-progress" value={detailsPoke.speed} max="100"></progress>
                    </div>


                    <div>
                        <div className="container-sub-info">
                            <div className="container-sub-info">
                                <h4 className="div-info-poke">Altura:&nbsp;&nbsp;</h4><p className="div-value-poke">{detailsPoke.height}</p>
                            </div>

                            <div className="container-sub-info">
                                <h4 className="div-info-poke">Peso:&nbsp;&nbsp;</h4><p className="div-value-poke">{detailsPoke.weight}</p>
                            </div>
                        </div>
                    </div>

                    <div className="container-sub-info">
                        <h4 className="div-info-poke">Tipo:&nbsp;&nbsp;</h4>
                        {detailsPoke.types?.map((e, i) => {
                            return (
                                <p key={i} className="div-value-poke">{e.name}</p>
                            )
                        })}
                    </div>

                </div>
            </div>
            <div className="div_btn_go_home">
                <Link to={'/home'}>
                    <button className="btn-back">
                        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                        <span>Volver</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}


export default Details







                /* <div className="progress-element progress-element--html">
                    <p className="progress-label">HTML</p>
                    <div className="progress-container">
                        <progress max="100" value="13">13%</progress>
                    </div>
                </div>

                <div className="progress-element progress-element--css">
                    <p className="progress-label">CSS</p>
                    <div className="progress-container">
                        <progress max="100" value="80">80%</progress>
                    </div>
                </div>

                <div className="progress-element progress-element--javascript">
                    <p className="progress-label">JavaScript</p>
                    <div className="progress-container">
                        <progress max="100" value="65">65%</progress>
                    </div>
                </div> */