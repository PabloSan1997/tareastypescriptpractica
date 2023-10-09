import { UseContextTareas } from "../Context";
import React from "react";
import '../styles/noti.css';

export function Notificacion(){
    const {noti, setNoti} = UseContextTareas();
    React.useEffect(()=>{
        if(noti){
            setTimeout(()=>{
                setNoti(false);
            },1500);
        }
    },[noti, setNoti]);
    

    return (
        <div className={noti?'noti mostrar':'noti'}>
            <h2>Mensaje</h2>
            <p className="me">Escriba su nueva tarea, no deje el espacion vacío</p>
        </div>
    );
}