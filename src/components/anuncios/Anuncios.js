import React from 'react';
import Sidebar from '../layouts/Sidebar';
import Barra from '../layouts/Barra';
import NuevoAnuncioB from '../anuncios/NuevoAnuncioB';
import ListadoAnuncios from '../anuncios/ListadoAnuncios';
import ListadoFavoritos from '../anuncios/ListadoFavoritos';

const Anuncios = () => {
        return (
            <div className="contenedor-app">
                <Sidebar>

                </Sidebar>

                <div className="seccion-principal">
                    <Barra />
                    <main>
                        <NuevoAnuncioB></NuevoAnuncioB>
                        <div className="contenedor-tareas">
                            <ListadoAnuncios/>

                        </div>
                        <ListadoFavoritos></ListadoFavoritos>
                        
                    </main>
                </div>
            </div>
        );
}

export default Anuncios;

