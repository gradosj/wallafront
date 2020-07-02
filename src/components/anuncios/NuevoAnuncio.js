import React, {Fragment,useState} from 'react';


const NuevoAnuncion = () => {

    //State para anuncios
    const [anuncio, guardarAnuncio] = useState({
        nombre: ''
    });

    //Extraer nombre de proyecto
    const {nombre} = anuncio;

    const onChangeAnuncio = e => {
        guardarAnuncio({
            ...anuncio,
            [e.target.name]: e.target.value
        })
    }


    return (
        <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
            > Nuevo Anuncio </button>
    
        <form
        className="formulario-nuevo-anuncio">
            <input
                type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                name="nombre"
                value={nombre}
                onChange={onChangeAnuncio}
            />

            


        </form>
        </Fragment>

    );

}

export default NuevoAnuncion;