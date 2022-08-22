import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import { getDetailsPoke,clearDetails } from "../../Redux/actions";

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
        <div>
            <h2>{detailsPoke.name}</h2>
            <img src={detailsPoke.background_image} width='440px' height='500' alt="Cover Game" />

            <div>
                {detailsPoke.types?.map((e, i)=>{
                    return(
                        <p key={i}>{e.name}</p>
                    )
                })}
            </div>

            <div>
                <p>{detailsPoke.hp}</p>
            </div>

            <div>
                <p>{detailsPoke.attack}</p>
            </div>

            <div>
                <p>{detailsPoke.defense}</p>
            </div>

            <div>
                <p>{detailsPoke.speed}</p>
            </div>

            <div>
                <p>{detailsPoke.height}</p>
            </div>

            <div>
                <p>{detailsPoke.weight}</p>
            </div>
            <Link to={'/home'}>Inicio</Link>
            
        </div>
        
    )
}

export default Details