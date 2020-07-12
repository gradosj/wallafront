import React from 'react';
import Sidebar from '../layouts/Sidebar';
import Barra from '../layouts/Barra';
import NuevoAnuncioB from './NuevoAnuncioB';
import ListadoAnuncios from './ListadoAnuncios';
import ListadoFavoritos from './ListadoFavoritos';
import DatosPersonales from './DatosPersonales';

const Privado = () => {
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
                        <DatosPersonales></DatosPersonales>
                        
                    </main>
                </div>
            </div>
        );
}

export default Privado;

