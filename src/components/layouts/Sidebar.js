import React from 'react';

import NuevoAnuncio from '../anuncios/NuevoAnuncio';


const Sidebar = () => {
    return (
        <aside>
            <h1>MiZonaPrivada <span>Task</span></h1>
            <NuevoAnuncio></NuevoAnuncio>

            <div className="proyectos"></div>
            <h2>Mis anuncios
                
            </h2>
        </aside>
    )
}

export default Sidebar;