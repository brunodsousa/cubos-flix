import './style.css';
import InputBusca from '../InputBusca/';

import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Favoritos } from "../../assets/images/bookmark-icon.svg";
import { ReactComponent as Promocao } from "../../assets/images/promotion-icon.svg";
import imgPerfil from '../../assets/images/profile.jpg';


function Header(props) {
    return (
        <header className="header">
            <Logo className="logo-header" />
            <InputBusca setFiltroNome={props.setFiltroNome}/>
            <div className="favoritos">
                <Favoritos className="favoritos-header" />
                <a href="#">Favoritos</a>
            </div>
            <div className="promocoes">
                <Promocao className="promocao-header" />
                <a href="#">Promoções</a>
            </div>
            <div className="welcome-user">
                <span>Bem vindo, Dina</span>
                <img src={imgPerfil} alt="Foto usuário"/>
            </div>
        </header>
          
    )
}

export default Header;