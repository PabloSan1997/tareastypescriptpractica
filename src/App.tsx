import {useRoutes, Navigate, HashRouter} from 'react-router-dom';
import { NotDone } from './pages/NotDone';
import { Done } from './pages/Done.tsx';

export function App(){
    const Rutas =()=>useRoutes([
        {
            path:'/',
            element:<Navigate to='/notdone'/>
        },
        {
            path:'/notdone',
            element:<NotDone/>
        },
        {
            path:'/done',
            element:<Done/>
        },
        {
            path:'*',
            element:<p className="Hola">Not found</p>
        }
    ]);
    return (
        <HashRouter>
            <Rutas/>
        </HashRouter>
    );
}