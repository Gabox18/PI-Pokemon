import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getTypes,getAllPokes,createPoke} from "../../Redux/actions.js"
import validate from "../../Funciones_js/Validacion.js";
import ViewCreate from "./ViewCreate.jsx";
import tituloCreate from "../../Img/título-Create.png"
import './create.css'
 
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
            <div className="div_create">
                <input type="image" src={tituloCreate} alt="Logo_Pokemon" onClick={() => dispatch(getAllPokes())} width='400px'/>
                <form onSubmit={(e) => handleSubmit(e)} className='form_create'>
                    <div className="padre_info">
                        <div className="hijo_form">
                            <div className="div_sub_info_create">
                                <label htmlFor="name_l" className="label_create">Nombre:</label>
                                <input type="text" name="name" id="name_l" onChange={(e) => handleInputChange(e)} value={form.name} />
                                {validate(form).name ? (<p className="danger">{validate(form).name}</p>) : (<p></p>)}
                            </div>


                            <div className="div_sub_info_create">
                                <label htmlFor="hp_l" className="label_create">Vida:</label>
                                <input type="range" min="0" max="100" name="hp" id="hp_l" onChange={(e) => handleInputChange(e)} value={form.hp} ></input>
                                <p>{form.hp}</p>
                                {validate(form).hp ? (<p className="danger">{validate(form).hp}</p>) : (<></>)}
                            </div>


                            <div className="div_sub_info_create">
                                <label htmlFor="attack_l" className="label_create">Ataque:</label>
                                <input type="range" min="0" max="100" name="attack" id="attack_l" onChange={(e) => handleInputChange(e)} value={form.attack} />
                                <p>{form.attack}</p>
                                {validate(form).attack ? (<p className="danger">{validate(form).attack}</p>) : (<></>)}
                            </div>

                            <div className="div_sub_info_create">
                                <label htmlFor="defense_l" className="label_create">Defensa:</label>
                                <input type="range" min="0" max="100" name="defense" id="defense_l" onChange={(e) => handleInputChange(e)} value={form.defense} ></input>
                                <p>{form.defense}</p>
                                {validate(form).defense ? (<p className="danger">{validate(form).defense}</p>) : (<></>)}
                            </div>

                            <div className="div_sub_info_create">
                                <label htmlFor="speede_l" className="label_create">Velocidad:</label>
                                <input type="range" min="0" max="100" name="speed" id="speed_l" onChange={(e) => handleInputChange(e)} value={form.speed} ></input>
                                <p>{form.speed}</p>
                                {validate(form).speed ? (<p className="danger">{validate(form).speed}</p>) : (<></>)}
                            </div>

                            <div className="div_sub_info_create">
                                <label htmlFor="height_l" className="label_create">Altura:</label>
                                <input type="range" min="0" max="100" name="height" id="height_l" onChange={(e) => handleInputChange(e)} value={form.height} ></input>
                                <p>{form.height}</p>
                                {validate(form).height ? (<p className="danger">{validate(form).height}</p>) : (<></>)}
                            </div>

                            <div className="div_sub_info_create">
                                <label htmlFor="weight_l" className="label_create">Peso:</label>
                                <input type="range" min="0" max="100" name="weight" id="weight_l" onChange={(e) => handleInputChange(e)} value={form.weight} ></input>
                                <p>{form.weight}</p>
                                {validate(form).weight ? (<p className="danger">{validate(form).weight}</p>) : (<></>)}
                            </div>
                        </div>


                        <div className="hijo_types">
                            <h3 >Elige los Tipos</h3>
                            <div className="div_Types">
                                {types?.map((type) => (
                                    <div className="div_sub_info_type" key={type}>
                                        <input type="checkbox" name="types" id={type} value={type} onChange={(e) => handleInputChange(e)} />
                                        <label htmlFor={type}>{type}</label>
                                    </div>
                                ))}
                                {validate(form).types ? (<p className="danger">{validate(form).types}</p>) : (<></>)}
                            </div>
                        </div>
                    </div>
                    <div className="div_sub_info_create div_imput_img">
                        <label htmlFor="background_image_l" className="label_create">Imagen: </label>
                        <input type="text" name="background_image" id="background_image_l" onChange={(e) => handleInputChange(e)} value={form.url} />
                    </div>

                    <button type='submit' disabled={Object.keys(validate(form)).length === 0 ? false : true} onClick={(e) => handleSubmit(e)}>Crear Pokemon</button>
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
