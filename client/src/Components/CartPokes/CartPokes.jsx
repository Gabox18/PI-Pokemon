import React from "react";
//import './cardGames.css'


function CartPokes(props){
    return(
        <div className="card">
            <div className="card-img"><img src={props.img} alt="cover" width='220px' height='250px'/></div>
            <div className="card-info">
                <p className="title">{props.name}</p>
                <p className="subtitle">{props.types?.toString()}</p>
            </div>
        </div>

    )
}

export default CartPokes
