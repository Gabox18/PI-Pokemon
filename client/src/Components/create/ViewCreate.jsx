import React, { useEffect } from "react";

let imgAux = `https://www.svgrepo.com/show/276264/pokeball-pokemon.svg`

function ViewCreate (props){ 
    useEffect(()=>{
        return()=>{
            props.setForm({
                name: "",
                hp:0,
                attack:0,
                defense:0,
                speed:0,
                height:0,
                weight:0,
                types:[],
                background_image:""
            })
        }
    },[props])
    return(
        <div>
            <h2>{props.name}</h2>
            <img src={props.background_image || imgAux} width='440px' height='500' alt="Cover Game" />

            <div>
                {props.types?.map((e, i)=>{
                    return(
                        <p key={i}>{e}</p>
                    )
                })}
            </div>

            <div>
                <p>{props.hp}</p>
            </div>

            <div>
                <p>{props.attack}</p>
            </div>

            <div>
                <p>{props.defense}</p>
            </div>

            <div>
                <p>{props.speed}</p>
            </div>

            <div>
                <p>{props.height}</p>
            </div>

            <div>
                <p>{props.weight}</p>
            </div>
            
            <button onClick={()=>props.setRenderDetails(false)}>Crear Otro Pokemon</button>
        </div>
    )
}

export default ViewCreate