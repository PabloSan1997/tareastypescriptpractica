import { UseContextTareas } from '../Context';
import '../styles/agregar.css';
import React from "react";

type Agregar = {
    mostrar:boolean,
    setMostrar(agregar:boolean):void
}
export function AgregarTarea({mostrar, setMostrar}:Agregar){
    const [texto, setTexto] = React.useState('');
    const {agregarTarea, setNoti} = UseContextTareas();
    const subir = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!texto){
            setNoti(true);
        }else{
            setMostrar(false);
            agregarTarea(texto);
            setTexto('');
        }
    }
    return(
        <form  className={mostrar?'agregar mostrar':'agregar'} onSubmit={subir}>
            <h2>Agregar Tarea</h2>
            <input 
            type="text" 
            className="nueva" 
            placeholder="Escriba la tarea"
            onChange={e => setTexto(e.target.value)}
            value={texto}
            />
            <button className="boton">Agregar</button>
        </form>
    );
}