import React from 'react'


/* Desde tareas  TAREA*/ 

const MisDatPers = ({misDatPers}) => {
    console.log('desde Mis anuncios');
    console.log(misDatPers);
    return (
    <li className="tarea sombra">
        
        <p>Usuario: {misDatPers.nombre}</p>
        <p>Password:  {misDatPers.password}</p>
      
       
    </li>
    );

}

export default MisDatPers;