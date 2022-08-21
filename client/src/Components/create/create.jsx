import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getTypes,getAllPokes,createPoke} from "../../Redux/actions.js"
import validate from "../../Funciones_js/Validacion.js";
import ViewCreate from "./ViewCreate.jsx";
 
function CreateGame(props){
    
    const dispatch = useDispatch();
    const types = useSelector(state=>state.AllTypes)
    useEffect(()=>{
        dispatch(getTypes())
        return()=>{
            dispatch(getAllPokes())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
//-----------------------------------------estados locales---------------------------------------------
    const [form, setForm] = useState({
        name: "",
        hp:0,
        attack:0,
        defense:0,
        speed:0,
        height:0,
        weight:0,
        types:[],
        background_image:""
    });

    let [renderDetails,setRenderDetails] = useState(false) //la utilizo para hacer un renderizado condicional del componente <Detail/>

 //-----------------------------------funciones handles-----------------------------------------------------
    const handleInputChange = function(e) {
        if(e.target.name === "types"){
            if(e.target.checked){
                setForm({
                    ...form,
                    [e.target.name] : [...form[e.target.name],e.target.value]
                })
            } else {
                setForm({
                    ...form,
                    [e.target.name] : form[e.target.name].filter(element=>element!==e.target.value)
                })
            }
        } else {
            setForm({
            ...form,
            [e.target.name]: e.target.value
       })}
    }
 
    const handleSubmit = function(e) {
       e.preventDefault();
       let error = validate(form)
       if(Object.keys(error).length === 0){
        setRenderDetails(true)
        dispatch(createPoke(form));
       } else {
        alert('Completa los campos requeridos')
       } 
       
    }
    return(
        renderDetails === false? 
        <div>
            <h2>Cargar Datos del Juego</h2>
            
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="name_l">Nombre: </label>
                <input type="text" name="name" id="name_l" onChange={(e) =>handleInputChange(e)} value={form.name} />
                {validate(form).name?(<p className="danger">{validate(form).name}</p>):(<></>)}


                <label htmlFor="hp_l">Vida: </label>
                <input type="number" name="hp" id="hp_l" onChange={(e) =>handleInputChange(e)} value={form.hp} ></input>
                {validate(form).hp?(<p className="danger">{validate(form).hp}</p>):(<></>)}


                <label htmlFor="attack_l">Ataque: </label>
                <input type="number" name="attack" id="attack_l" onChange={(e) =>handleInputChange(e)} value={form.attack} />
                {validate(form).attack?(<p className="danger">{validate(form).attack}</p>):(<></>)}

                <label htmlFor="defense_l">Defensa: </label>
                <input type="number" name="defense" id="defense_l" onChange={(e) =>handleInputChange(e)} value={form.defense} ></input>
                {validate(form).defense?(<p className="danger">{validate(form).defense}</p>):(<></>)}

                <label htmlFor="speede_l">Velocidad: </label>
                <input type="number" name="speed" id="speed_l" onChange={(e) =>handleInputChange(e)} value={form.speed} ></input>
                {validate(form).speed?(<p className="danger">{validate(form).speed}</p>):(<></>)}

                <label htmlFor="height_l">Altura: </label>
                <input type="number" name="height" id="height_l" onChange={(e) =>handleInputChange(e)} value={form.height} ></input>
                {validate(form).height?(<p className="danger">{validate(form).height}</p>):(<></>)}

                <label htmlFor="weight_l">Peso: </label>
                <input type="number" name="weight" id="weight_l" onChange={(e) =>handleInputChange(e)} value={form.weight} ></input>
                {validate(form).weight?(<p className="danger">{validate(form).weight}</p>):(<></>)}
 

                <div>
                    <h3 >Elige los Tipos</h3>
                    {types?.map((type) => (
                        <div key={type}>
                            <input type="checkbox" name="types" id={type} value={type} onChange={(e) => handleInputChange(e)} />
                            <label htmlFor={type}>{type}</label>
                        </div>
                    ))}
                    {validate(form).types?(<p className="danger">{validate(form).types}</p>):(<></>)}
                </div>
       
                <label htmlFor="background_image_l">Imagen: </label>
                <input type="text" name="background_image" id="background_image_l" onChange={(e) =>handleInputChange(e)} value={form.url} />

                <button type='submit' disabled={Object.keys(validate(form)).length === 0?false:true} onClick={(e)=>handleSubmit(e)}>Crear Pokemon</button>
            </form>

            <Link to='/home'>inicio</Link>
        </div>

        :<ViewCreate name={form.name}
        background_image={form.background_image} 
        types={form.types} 
        defense={form.defense}
        hp={form.hp}
        attack = {form.attack}
        speed= {form.speed}
        height= {form.height}
        weight= {form.weight}
        setRenderDetails={setRenderDetails}//paso funcion que modifica el estado local del renderizado condicional
        setForm={setForm}//paso la funcion que modifica el estado local del formulario para limpiarlo en el desmontado
        />
    )
}

export default CreateGame
//{Object.keys(validate(form)).length === 0?false:true}
