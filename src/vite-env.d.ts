/// <reference types="vite/client" />

interface Tarea {
    tarea:string;
    tiempo:Date;
    estado:boolean
}

interface TareaNO{
    tarea:string;
    tiempo:string;
    estado:boolean;
    id:string;
}

interface Tarea_id extends Tarea{
    id:string
}

type Children={
    children:JSX.Element|JSX.Element[]
}

type Context_Type = {
    tareas:Tarea_id[],
    agregarTarea(text:sring):void,
    estadoTarea(id:string):void,
    eliminarTarea(id:string):void,
    noti:boolean, 
    setNoti(a:boolean):void
}