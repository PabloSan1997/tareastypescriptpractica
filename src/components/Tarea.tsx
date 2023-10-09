import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { UseContextTareas } from '../Context';

export function Tarea({ tarea, tiempo, id }: Tarea_id) {
    const fechas = tiempo.toLocaleString().split(', ');
    const { eliminarTarea, estadoTarea } = UseContextTareas();

    return (
        <div className="tarea_caja hecha">
            <CheckIcon
                className='flecha'
                onClick={() => estadoTarea(id)}
            />
            <span className="tarea">{tarea}</span>
            <div className="tiempo">
                <span>{fechas[0]}</span>
                <span>{fechas[1]}</span>
            </div>
            <XMarkIcon
                className='quitar'
                onClick={() => eliminarTarea(id)}
            />
        </div>
    );
}