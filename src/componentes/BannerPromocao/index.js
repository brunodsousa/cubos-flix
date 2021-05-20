import React from 'react';
import './style.css';
import {ReactComponent as IconCupom} from '../../assets/images/coupon-circle-icon.svg';
import ilustracaoDinheiro from '../../assets/images/money.png';

function BannerPromocao(props) {
    return (
        <div className="container-bannerPromo" onClick={props.aplicacaoCupom}>
            <div className="titulo-mais-cupom">
                <h2>APROVEITE AGORA</h2>
                <div className="div-cupom">
                    <IconCupom />
                    <span>CUPOM: HTMLNAOELINGUAGEM</span>
                </div>
            </div>
            <div className="ilustracao-banner">
                <img src={ilustracaoDinheiro} alt="Money banner"/>
            </div>
            
        </div>
    )
}

export default BannerPromocao;