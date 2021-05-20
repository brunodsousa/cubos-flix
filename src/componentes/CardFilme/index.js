import React from 'react';

import { ReactComponent as EstrelaFavoritar } from '../../assets/images/star.svg';
import { ReactComponent as EstrelaAvaliacao } from '../../assets/images/golden-star.svg';

import './style.css';

function CardFilme(props) {
    const filme = props.filme;
    const background = `linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%), url('${filme.backgroundImg}') no-repeat center / cover`;
    return (
        <div className="card-filme" style={{background}}>
            <EstrelaFavoritar className={filme.isStarred ? "favorito-fill" : ""} onClick={() => props.preencherFavorito(filme.title)}/>
            <div className="informacoes-filme">
                <h3>{filme.title}</h3>
                <div className="div-info-avaliacao">
                    <EstrelaAvaliacao />
                    <span>{filme.starsCount}</span>
                </div>
            </div>
            <button className="button-sacola-cardFilme filme" onClick={() => props.adicionarFilmeSacola(filme)}>
                Sacola 
                <span className="preco">R$ {filme.price}</span>
            </button>
        </div>
    );

}

export default CardFilme;