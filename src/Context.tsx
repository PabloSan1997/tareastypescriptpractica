import React from "react";
import { v4 as uuid } from 'uuid';
import { local_storage } from "./utilities/storage";

const Contexto = React.createContext({});

export function Provedor({ children }: Children) {
    const [tareas, setTareas] = React.useState<Tarea_id[]>(local_storage.leerTarea());
    const [noti, setNoti] = React.useState(false);

    const agregarTarea = (texto: string) => {
        const nuevaTarea: Tarea_id = {
            id: uuid(),
            tarea: texto,
            tiempo: new Date(),
            estado: false
        }
        setTareas([...tareas, nuevaTarea]);
        local_storage.guardar([...tareas, nuevaTarea]);
    }

    const estadoTarea=(id:string)=>{
        const indice = tareas.findIndex(p=>p.id===id);
        if(indice>-1){
            tareas[indice].estado= !tareas[indice].estado;
            setTareas([...tareas]);
            local_storage.guardar([...tareas]);
        }
    }

    const eliminarTarea = (id:string) =>{
        const indice = tareas.findIndex(p=>p.id===id);
        if(indice>-1){
            const nuevo = tareas.filter(p=>p.id!==id);
            setTareas([...nuevo]);
            local_storage.guardar([...nuevo]);
        }
    }
    return (
        <Contexto.Provider value={{
            tareas,
            agregarTarea,
            estadoTarea,
            eliminarTarea,
            noti, 
            setNoti
        }}>
            {children}
        </Contexto.Provider>
    );
}


export const UseContextTareas = (): Context_Type => React.useContext(Contexto) as Context_Type;