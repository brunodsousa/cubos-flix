import React from 'react';
import './style.css';

function BotaoCompra(props) {
    return (
        <button className="botao-confirmacao">
            {props.children}
            <span className="preco">R$ {props.preco.toString().replace('.', ',')}</span>
        </button>
    )
}

export default BotaoCompra;