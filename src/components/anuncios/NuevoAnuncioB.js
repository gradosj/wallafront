import React, { Fragment, useState, useContext } from "react";
import AnunciosContext from "../../context/anuncios/anunciosContext";
import styled from "@emotion/styled";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const NuevoAnuncioB = () => {
  // Obtener el state del formulario

  const anunciosContext = useContext(AnunciosContext);
  const {
    formulario,
    mostrarFormulario,
    mostrarError,
    agregarAnuncio,
  } = anunciosContext;

  //State para anuncios
  const [anuncio, guardarAnuncio] = useState({
    nombre: "",
    venta: "",
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

  return (
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

          <Campo>
            <Label>Anuncio de ...</Label>
            <InputRadio
              type="radio"
              name="venta"
              value="true"
              checked={venta === "true"}
              onChange={onChangeAnuncio}
            />{" "}
            Venta
            <InputRadio
              type="radio"
              name="venta"
              value="false"
              checked={venta === "false"}
              onChange={onChangeAnuncio}
            />{" "}
            Compra
          </Campo>

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
            placeholder="foto"
            name="foto"
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

          <Campo>
            <Label>Tag</Label>
            <Select name="tags" value={tags} onChange={onChangeAnuncio}>
              <option value="">-- Seleccione --</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Mobile">Mobile</option>
              <option value="Motor">Motor</option>
              <option value="Work">Work</option>
            </Select>
          </Campo>

          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block "
            placeholder="nombre tarea"
            value="Agregar Anuncio"
            onClick={() => mostrarFormulario()}
            onChange={onChangeAnuncio}
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NuevoAnuncioB;
