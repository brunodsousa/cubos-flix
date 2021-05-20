import React, {useState} from 'react';
import './style.css';
import {ReactComponent as SearchIcon} from '../../assets/images/search-icon.svg';

function InputBusca(props) {
    const [textoInput, setTextoInput] = useState('');
    function pesquisarPeloEnter(e) {
        if (e.key !== "Enter") return;
        props.setFiltroNome(textoInput);
    }
    return (
        <div className="container">
            <input type="text" placeholder="Pesquise filmes..." className="input-busca"
            onChange={(e) => setTextoInput(e.target.value)} value={textoInput} onKeyDown={(e) => pesquisarPeloEnter(e)}/>
            <a href="#"><SearchIcon className="searchIcon" onClick={() => props.setFiltroNome(textoInput), console.log(textoInput)}/></a>
        </div>
    )
}

export default InputBusca;