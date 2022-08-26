import React from "react";
import { useDispatch } from "react-redux";
import { getAllPokes } from "../../Redux/actions";
import logo from "../../Img/Pokemon_logo.png"
import Search from "./Search/Search";
import './NavBar.css'

function Navbar (props){
    const dispatch = useDispatch()

    return(
        <nav className="nav_comp">   
            <input type="image" src={logo} alt="Logo_Pokemon" onClick={()=>dispatch(getAllPokes())} className="logo div_logo"/>
            <div className="div_search">
                <Search/>
            </div>
            <div className="div_tex">
                <h3 className="h1_nav">Individual Project - Gabriel Ferrer</h3>
            </div>
        </nav>
    )
}

export default Navbar