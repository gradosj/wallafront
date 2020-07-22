import React from "react";

const MisDatPers = ({ misDatPers }) => {
  console.log("desde Mis anuncios");
  console.log(misDatPers);
  return (
    <li className="tarea sombra">
      <p>Usuario: {misDatPers.nombre}</p>
      <p>Password: {misDatPers.password}</p>
    </li>
  );
};

export default MisDatPers;
