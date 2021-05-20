import React from 'react';
import './style.css';

function Filtros(props) {
    function filtrarPorBotao(filtro) {
        if (filtro === 'all') {
            props.setFiltroPorCategoria([]);
            return;
        }

        const jaEstaSelecionado = props.filtroPorCategoria.includes(filtro);
        if (jaEstaSelecionado) {
            const novoArray = props.filtroPorCategoria.filter(x => x !== filtro);
            props.setFiltroPorCategoria(novoArray);
            return;
        }

        props.setFiltroPorCategoria([...props.filtroPorCategoria, filtro]);
    }
    return (
        <div className="div-filtros">
            <button className={`filtro ${props.filtroPorCategoria.length === 0 ? 'botao-ativo' : ''}`} 
             onClick={() => filtrarPorBotao('all')}>
                Todos
            </button>
            <button className={`filtro ${props.filtroPorCategoria.includes('action') ? 'botao-ativo' : ''}`}
             onClick={() => filtrarPorBotao('action')}>
                Ação
            </button>
            <button className={`filtro ${props.filtroPorCategoria.includes('romance') ? 'botao-ativo' : ''}`}
             onClick={() => filtrarPorBotao('romance')}>
                Romance
            </button>
            <button className={`filtro ${props.filtroPorCategoria.includes('science fiction') ? 'botao-ativo' : ''}`}
             onClick={() => filtrarPorBotao('science fiction')}>
                Ficção científica
            </button>
            <button className={`filtro ${props.filtroPorCategoria.includes('horror') ? 'botao-ativo' : ''}`}
             onClick={() => filtrarPorBotao('horror')}>
                Terror
            </button>
        </div>
    )
}

export default Filtros;