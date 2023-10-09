

export const local_storage = {

    guardar: (data: Tarea_id[]): void => {
        localStorage.tareas = JSON.stringify(data)
    },

    leerTarea: (): Tarea_id[] => {
        if (!localStorage.tareas) {
            local_storage.guardar([]);
        }
        const datos = JSON.parse(localStorage.tareas) as TareaNO[];
        const convertir = datos.map(p => {
            const tiempo = Date.parse(p.tiempo);
            return {
                ...p,
                tiempo: new Date(tiempo)
            }
        });
        return convertir;
    }
}