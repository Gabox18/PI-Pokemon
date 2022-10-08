import React from "react";
import { useDispatch } from "react-redux";
import { getAllPokes,clearAllPokes,clearTypes } from "../../Redux/actions";
import logo from "../../Img/Pokemon_logo.png"
import Search from "./Search/Search";
import {Link} from 'react-router-dom'
import './NavBar.css'

function Navbar (props){
    const dispatch = useDispatch()

    function onClickChange(){
        //dispatch(getAllPokes())
        dispatch(clearTypes())
        dispatch(clearAllPokes())
    }

    return(
        <nav className="nav_comp">
            <input type="image" src={logo} alt="Logo_Pokemon" onClick={() => onClickChange()} className="logo div_logo" />
            <div className="div_search">
                <Search paginado={props.paginado}/>
            </div>
            <div className="div_btn">
                <Link to={'/home/Create'}>
                    <button className="create_btn">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Crear Pokemon 
                        </span>
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar