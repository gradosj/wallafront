import React, { useContext } from 'react';
import AnunciosPRContext from '../../context/anunciosPR/anunciosPRContext';



/* Desde tareas  TAREA*/ 

const MisAnuncios = ({misAnuncios}) => {
    console.log('desde Mis anuncios');
    console.log(misAnuncios);

    //obtener funcion de context de tarea

    const anunciosPRContext = useContext(AnunciosPRContext);
    const {mostrarMisAnuncios} = anunciosPRContext;

    return (
    <li className="tarea sombra">
        
        <p>{misAnuncios.nombre}</p>
        <div className="estado">
            {misAnuncios.estado
            ?
                (
                    <button
                        type="buttom"
                        className="completo"
                        >Completo</button>

             )
            :
                (
                    <button
                        type="buttom"
                        className="incompleto"
                        >Incompleto</button>

            )
            
            }
        </div>
        <div className="acciones">
            <button
                type="button"
                className="btn btn-primario">
                Editar
            </button>

            <button
            type="button"
            className="btn btn-secundario">
            
                Eliminar
            </button>

        </div>
    </li>
    );

}

export default MisAnuncios;