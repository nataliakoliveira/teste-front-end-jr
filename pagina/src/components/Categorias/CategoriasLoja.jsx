import React, { useState } from 'react';
import './Categorias.css'

export default function SeccaoLoja(props) {
    const [colorido, setColorido] = useState(false);

    function handleClick() {
        setColorido(!colorido);
    }

    return (
        <div className={`quadrado${colorido ? ' colorido' : ''}`} onClick={handleClick}>
            <i className={props.icone}></i>
            <p className='texto-seccao'>{props.texto}</p>
        </div>
    );
}
