import React from "react";

/* Sintaxis de desestructuracion */
/* operador ternario */
function Boton({texto, isClick,onClickEvent}){
    return (
        <button className={isClick ? 'btn-clk' : 'btn-reload'} onClick={onClickEvent} >
            {texto}
        </button>
    )
}


export default Boton;