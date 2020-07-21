import React, { Fragment, useState, useContext } from "react";
import MisAnuncios from "./MisAnuncios";
import AnunciosContext from "../../context/anuncios/anunciosContext";

const ListadoFavoritos = () => {
    // Obtener el state del formulario

    const anunciosContext = useContext(AnunciosContext);
    const { formularioFav, ListadoFavoritos } = anunciosContext;

    //State para anuncios
    const [anuncio, guardarAnuncio] = useState({
        nombre: "",
    });

    //Extraer nombre de proyecto
    const { nombre } = anuncio;

    const onChangeAnuncio = (e) => {
        guardarAnuncio({
            ...anuncio,
            [e.target.name]: e.target.value,
        });
    };

    const anuncios = [
 
    ];
    return (
        <Fragment>
            {formularioFav ? (
                <div>
                    <h1> Favoritos  (en contrucción)</h1>
                    <ul className="listado-tarea">
                        {anuncios.length === 0 ? (
                            <li className="misAnuncios">
                                <p>No hay anuncios</p>
                            </li>
                        ) : (
                                anuncios.map((anuncios) => <MisAnuncios misAnuncios={anuncios} />)
                            )}
                    </ul>
                   
                </div>
            ) : null
            }
        </Fragment>
    );
};

export default ListadoFavoritos;
