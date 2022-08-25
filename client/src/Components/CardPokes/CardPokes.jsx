import React from "react";
import './CardPokes.css'


function CardPokes(props){
  return (
        <div className="card">
            <div className="content content2">
                <div className="front">
                    <img src={props.img} alt="cover" width='280px' height='250px'/>
                    <h3 className="title">{props.name}</h3>
                </div>

                <div className="back">
                    <h4 className="title_2">Type</h4>
                    <p className="description">
                        {props.types?.toString()}
                    </p>
                    <img src={props.img2} alt="cover" width='280px' height='250px'/>   
                </div>
            </div>
        </div>
    )
}



export default CardPokes  

