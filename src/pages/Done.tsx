import { UseContextTareas } from "../Context";
import { Header } from "../components/Header";
import { Tarea } from "../components/Tarea";

export function Done(){
    const {tareas} = UseContextTareas();
    const mostrar = tareas.filter(p=>p.estado);
    return (
        <>
            <Header/>
            <h2 className="mainti">Tareas Hechas</h2>
            <div className="contenedor hechas">
                {mostrar.map(p=>(
                    <Tarea key={p.id} {...p}/>
                ))}
            </div>
        </>
    );
}