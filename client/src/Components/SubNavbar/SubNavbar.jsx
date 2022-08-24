import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {getAllPokes,filterTypes,filterDb,getTypes,orderPokesBy} from "../../Redux/actions.js";
//import './nav.css'

function SubNavbar(props) {
  const AllTypes = useSelector((state) => state.AllTypes);
  const dispatch = useDispatch();

  function handleSelectFilter(e) {
    e.target.value === "createdInDb"
      ? dispatch(filterDb(e.target.value)) && props.paginado(1)
      : dispatch(filterTypes(e.target.value)) && props.paginado(1);
  }

  function handleSelectOrderBy(e) {
    dispatch(orderPokesBy(e.target.value));
    props.paginado(1);
  }

  return (
    <div className="div_container">
      <div className="div_oder">
        <select id="Ordenar" onChange={(e) => handleSelectOrderBy(e)}>
          <option>Ordenar por</option>
          <optgroup label="Nombres">
            <option value="asc_Alf">A - Z</option>
            <option value="des_Alf">Z - A</option>
          </optgroup>
          <optgroup label="Ataque">
            <option value="asc_Ata">Ascendente</option>
            <option value="des_Ata">descendente</option>
          </optgroup>
        </select>
      </div>

      <div className="div_filter">
        <select id="Ordenar" onChange={(e) => handleSelectFilter(e)}>
          <option>Filtrar por</option>
          <optgroup label="Mis Pokemons">
            <option value="createdInDb">Creados</option>
          </optgroup>
          <optgroup label="Tipos">
            {AllTypes?.map((genre, index) => {
              return (
                <option key={index} value={genre}>
                  {genre}
                </option>
              );
            })}
          </optgroup>
        </select>
      </div>

      <div className="div_reset">
        <button onClick={() => {
            dispatch(getAllPokes())
            dispatch(getTypes())
        }}>Mostrar Todos</button>
      </div>

      <div className="div_create">
        <Link to="/home/Create">
          <button>Crear Pokemons</button>
        </Link>
      </div>

    </div>
  );
}

export default SubNavbar