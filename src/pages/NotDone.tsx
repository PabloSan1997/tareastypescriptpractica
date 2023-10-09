import { UseContextTareas } from "../Context";
import { Header } from "../components/Header";
import { Tarea } from "../components/Tarea";
import '../styles/pagina.css'

export function NotDone() {
    const {tareas} = UseContextTareas();
    const mostrar = tareas.filter(p=>!p.estado);
    return (
        <>
            <Header />
            <h2 className="mainti">Tareas Pendientes</h2>
            <div className="contenedor">
                {mostrar.map(p=>(
                    <Tarea key={p.id} {...p}/>
                ))}
            </div>
        </>
    );
}