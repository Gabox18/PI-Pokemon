/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Paginado (props){
    const numeroDepagina = []
    
    for (let i=0; i<Math.ceil(props.allPokes/props.cartasPorPagina) ; i++) {
        numeroDepagina.push(i+1)
    }

    return(
        <div className="_paginado">
            <ul>
                {numeroDepagina?.map(numeroPagi=>{
                    return(
                        <button key={numeroPagi} onClick={()=>{props.paginado(numeroPagi)}}>{numeroPagi}</button>
                    ) 
                })}
            </ul>
        </div>
    )
}

export default Paginado