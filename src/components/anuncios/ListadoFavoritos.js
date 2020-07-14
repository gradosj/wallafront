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
        { nombre: "Nombre anuncio", descripcion: "Anuncio 5", estado: true },
        { nombre: "Nombre anuncio1", descripcion: "Anuncio 2", estado: false },
        { nombre: "Nombre anuncio2", descripcion: "Anuncio 3", estado: true },
    ];
    return (
        <Fragment>
            {formularioFav ? (
                <div>
                    <h1> Favoritos </h1>
                    <ul className="listado-tarea">
                        {anuncios.length === 0 ? (
                            <li className="misAnuncios">
                                <p>No hay anuncios</p>
                            </li>
                        ) : (
                                anuncios.map((anuncios) => <MisAnuncios misAnuncios={anuncios} />)
                            )}
                    </ul>
                    <button type="button" className="btn btn-eliminar">
                        Eliminar proyecto
                    </button>
                </div>
            ) : null
            }
        </Fragment>
    );
};

export default ListadoFavoritos;
