import React, {useRef} from 'react';
import BotaoCompra from '../BotaoCompra';

import { ReactComponent as IconSacola } from '../../assets/images/bag-icon.svg';
import { ReactComponent as IlustracaoSacola } from '../../assets/images/person-illustration.svg';
import { ReactComponent as IconCupomInput } from '../../assets/images/coupon-icon.svg';
import { ReactComponent as BotaoMaisSacola } from '../../assets/images/plus-icon.svg';
import { ReactComponent as BotaoMenosSacola } from '../../assets/images/minus-icon.svg';
import { ReactComponent as BotaoLixeiraSacola } from '../../assets/images/trash-icon.svg';


import './style.css';

function Sacola(props) {
    const inputSacola = useRef();
    function focarInput() {
        inputSacola.current.focus();
    }

    const sacolaVazia = props.filmesSacola.length === 0;
    function cupomInput(e) {
        if (e.target.value !== 'htmlnaoelinguagem') return;
        if (e.key !== 'Enter') return;
        props.setCupomAtivo(true);
        props.setValorASerPago(props.valorASerPago - (props.valorASerPago * 0.1));
    }
    return (
        <div className="container-sacola">
            <div className="titulo-sacola">
                <IconSacola />
                <h2 className="titulo-sacola">Sacola</h2>
            </div>
            <div className="conteudo-sacola">
                { sacolaVazia ? (
                    <div className="sacola-vazia">
                        <h2>Sua sacola está vazia</h2>
                        <h3>Adicione filmes agora</h3>
                        <IlustracaoSacola className="ilustracao-sacola"/>
                    </div>
                ) : (
                    props.filmesSacola.map(filme => (
                        <div className="sacola-com-itens">
                            <div className="filme-na-sacola">
                                <img src={filme.backgroundImg} alt={filme.nome}/>
                                <div className="informacoes-filme-sacola">
                                    <span className="nome-filme-sacola">{filme.nome}</span>
                                    <span className="preco-filme-sacola">R$ {filme.preco}</span>
                                </div>
                                <div className="botoes-sacola">
                                    <BotaoMaisSacola onClick={() => props.adicionarFilme(filme.nome)}/>
                                    {filme.quantidade}
                                    {filme.quantidade === 1 ? 
                                        <BotaoLixeiraSacola onClick={() => props.removerFilme(filme.nome)}/> : 
                                        <BotaoMenosSacola onClick={() => props.removerFilme(filme.nome)}/>
                                    }
                                </div>
                            </div>
                        </div>
                    ))      
                )}
            </div>
            <div className="input-cupom-sacola">
                <span className="span-cupom-sacola">
                    Insira seu cupom
                </span>
                <div className="input-mais-icon"  onClick={focarInput}>
                    <input type="text" ref={inputSacola} placeholder="Cupom de desconto" onKeyDown={(e) => cupomInput(e)}/>
                    <IconCupomInput className="icon-cupom-input" onClick={focarInput}/>
                </div>
                {!sacolaVazia ? <BotaoCompra preco={props.valorASerPago}>Confirme seus dados</BotaoCompra> : ''}

                
            </div>
        </div>
    )
}

export default Sacola;