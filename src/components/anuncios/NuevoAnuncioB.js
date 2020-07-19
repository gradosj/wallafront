import React, { Fragment, useState, useContext } from "react";
import AnunciosContext from "../../context/anuncios/anunciosContext";

const NuevoAnuncioB = () => {
  // Obtener el state del formulario

  const anunciosContext = useContext(AnunciosContext);
  const { formulario, mostrarFormulario, mostrarError, agregarAnuncio } = anunciosContext;

  //State para anuncios
  const [anuncio, guardarAnuncio] = useState({
    nombre: "",
    venta: true,
    precio: 0,
    foto: "",
    descripcion: "",
    tags: [],
  });

  //Extraer nombre de proyecto
  const { nombre, venta, precio, foto, descripcion, tags } = anuncio;

  const onChangeAnuncio = (e) => {
    guardarAnuncio({
      ...anuncio,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario envia un proyecto
  const onSubmitAnuncio = (e) => {
    e.preventDefault();

    // Validar los campos
    if (nombre === "") {
      mostrarError();
      return;
    }

    // agregar al state
    agregarAnuncio(anuncio);

    // Reiniciar el form
    guardarAnuncio({
      nombre: "",
    });
  };

  // Mostrar el formulario
  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    // formulario principal de la zona privada
    /* {<Fragment>
      {formulario ? (
        {<div className="createadd bg-dark">
          <h1 className="text-white m-2">Crea tu anuncio:</h1>
          <form onSubmit={this.onSubmitController}>
            <div className="form-group m-2">
              <input
                className="form-control mt-2"
                required
                type="text"
                id="name"
                placeholder="Nombre"
                value={formName}
                onChange={this.nameController}
              ></input>
              <select
                className="form-control mt-2"
                id="compra-venta"
                value={formSellOrBuy}
                onChange={this.sellController}
              >
                <option value="sell">Venta</option>
                <option value="buy">Compra</option>
              </select>
              <select
                className="form-control mt-2"
                id="tags"
                value={formTags}
                onChange={this.tagController}
              >
                <option value="lifestyle">Lifestyle</option>
                <option value="mobile">Mobile</option>
                <option value="motor">Motor</option>
                <option value="work">Work</option>
              </select>
              <input
                className="form-control mt-2"
                required
                type="number"
                placeholder="Precio"
                value={formPriceMin}
                onChange={this.priceController}
              ></input>
              <input
                className="form-control mt-2"
                required
                type="url"
                value={formUrl}
                placeholder="Pega aquí la URL de la imagen"
                onChange={this.urlController}
              ></input>
              <textarea
                className="form-control mt-2"
                required
                value={formTextAreaDescription}
                placeholder="Descripción"
                onChange={this.textAreaController}
              ></textarea>
              <input
                className="btn btn-secondary form-control mt-2"
                type="submit"
                value="Subir!"
              ></input>
            </div>
          </form>
          <h1 className="text-info m-2">{this.state.importantInfo}</h1>
        </div> }
      ) : null}
    </Fragment>}*/

    <Fragment>
      {formulario ? (
      
          <form onSubmit={onSubmitAnuncio}>
            
              <input
                type="text"
                className="input-text"
                placeholder="Titulo Anuncio"
                name="nombre"
                value={nombre}
                onChange={onChangeAnuncio}
              />
            

           
              <select className="" value={venta} onChange={onChangeAnuncio}>
                <option value="sell">Venta</option>
                <option value="buy">Compra</option>
              </select>
            

           

              <input
                type="number"
                className="input-text"
                placeholder="Precio"
                name="precio"
                value={precio}
                onChange={onChangeAnuncio}
              />
            

           
              <input
                type="file"
                className="input-text"
                placeholder="fichero"
                name="fichero"
                value={foto}
                onChange={onChangeAnuncio}
              />
            

           
              <input
                type="text"
                className="input-text"
                placeholder="Descripcion"
                name="descripcion"
                value={descripcion}
                onChange={onChangeAnuncio}
              />
           

            
              <select id="tags" value={tags} onChange={onChangeAnuncio}>
                <option value="lifestyle">Lifestyle</option>
                <option value="mobile">Mobile</option>
                <option value="motor">Motor</option>
                <option value="work">Work</option>
              </select>
            

           
              <input
                type="submit"
                className="btn btn-primario btn-submit btn-block "
                placeholder="nombre tarea"
                value="Agregar Tarea"
                onClick={() => mostrarFormulario()}
                onChange={onChangeAnuncio}
              />
            
          </form>
       
      ) : null}
    </Fragment>
  );
};

export default NuevoAnuncioB;
