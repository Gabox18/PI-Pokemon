import React from "react";
import './CardPokes.css'
let img_aux = 'https://pm1.narvii.com/6338/ca7ea6ac3d3d733e024031a3b5d79394ce6cd7f9_hq.jpg'

function CardPokes(props){
  return (
        <div className="card">
            <div className="content content2">
                <div className="front">
                    <img src={props.img} alt="cover" width='280px' height='250px'/>
                    <h3 className="title">{props.name}</h3>
                </div>

                <div className="back">
                    <h4 className="title_2">Tipo</h4>
                    <p className="description">
                        {props.types?.toString().split(',').join(' / ')}
                    </p>
                    <img src={!props.img2?img_aux:props.img2} alt="cover" width='280px' height='250px'/>   
                </div>
            </div>
        </div>
    )
}



export default CardPokes  

