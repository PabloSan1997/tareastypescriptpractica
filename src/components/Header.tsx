import {NavLink} from 'react-router-dom';
import {Bars3Icon} from '@heroicons/react/24/solid';
import '../styles/header.css';
import { AgregarTarea } from './AgregarTarea';
import React from "react";
import { Notificacion } from './Notificacion';


export function Header(){
    const activated = (e:{isActive: boolean}) => e.isActive?'lista activado':'lista';
    const [mostrar, setMostrar] = React.useState(false);
    return (
       <>
         <header>
            <h1>Mis tareas</h1>
            <nav className="menu">
                <ul>
                    <li>
                        <NavLink to='/notdone' className={activated}>Not Done</NavLink>
                    </li>
                    <li>
                        <NavLink to='/done' className={activated}>Done</NavLink>
                    </li>
                </ul>
            </nav>
            <Bars3Icon className='barra' onClick={()=>setMostrar(!mostrar)}/>
        </header>
        <AgregarTarea mostrar={mostrar} setMostrar={setMostrar}/>
        <Notificacion/>
       </>
    );
}