import React, {useState} from 'react';
import Movies from './data.js';
import Header from './componentes/Header';
import BannerPromocao from './componentes/BannerPromocao';
import CardFilme from './componentes/CardFilme';
import Filtros from './componentes/Filtros';
import Sacola from './componentes/Sacola';
import './App.css';

function App() {
  const [movies, setMovies] = useState(Movies);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroPorCategoria, setFiltroPorCategoria] = useState([]);
  const [filmesSacola, setFilmesSacola] = useState([]);
  const [valorASerPago, setValorASerPago] = useState(0);
  const [cupomAtivo, setCupomAtivo] = useState(false);

  function preencherFavorito(nomeFilme) {
    const novoArray = [...movies];  
    const filme = novoArray.find(x => x.title === nomeFilme);
      filme.isStarred = !filme.isStarred;
      setMovies(novoArray);
  }
  function filtrarFilmeInput(filme) {
    if (!filtroNome && filtroPorCategoria.length === 0) return filme;
  
    if (filtroNome && filtroPorCategoria.length > 0) {
      if (filtroPorCategoria.some(categoria => filme.categories.includes(categoria)) && filme.title.includes(filtroNome)) {
        return filme;
      } else {
        return;
      }
    }

    if (filtroPorCategoria.length > 0 && filtroPorCategoria.some(categoria => filme.categories.includes(categoria))) {
      return filme;
    }

    if (filtroNome && filme.title.includes(filtroNome)) return filme;
    if (filtroNome && filme.title.toLowerCase().includes(filtroNome)) return filme;

    
  }

  function adicionarFilmeSacola(filme) {
    const novoArray = [...filmesSacola];
    const jaEstaNaSacola = novoArray.find(x => x.nome === filme.title);
    setValorASerPago(valorASerPago + filme.price);
    if (jaEstaNaSacola) {
      jaEstaNaSacola.quantidade++;
      setFilmesSacola(novoArray);
      return;
    }

    const filmeNaSacola = {
      nome: filme.title,
      preco: filme.price, 
      backgroundImg: filme.backgroundImg,
      quantidade: 1,
    }
    setValorASerPago(valorASerPago + filme.price);
    setFilmesSacola([...novoArray, filmeNaSacola]);
  }

  function adicionarFilme(filmeNome) {
    const novoArray = [...filmesSacola];
    const filmeNaSacola = novoArray.find(x => x.nome === filmeNome);
    filmeNaSacola.quantidade++;
    setFilmesSacola(novoArray);
    setValorASerPago(valorASerPago + filmeNaSacola.preco);
  }

  function removerFilme(filmeNome) {
    const novoArray = [...filmesSacola];
    const filmeNaSacola = novoArray.find(x => x.nome === filmeNome);
    const indice = novoArray.indexOf(filmeNaSacola);
    setValorASerPago(valorASerPago - filmeNaSacola.preco);
    if (filmeNaSacola.quantidade === 1) {
      novoArray.splice(indice, 1);
      setFilmesSacola(novoArray);
      return;
    } else {
      filmeNaSacola.quantidade--;
      setFilmesSacola(novoArray);
    }
  }

  function aplicacaoCupom() {
    setValorASerPago(valorASerPago - (valorASerPago * 0.1).toFixed(2));
    setCupomAtivo(true);
  }

    return (
    <div className="App">
        <Header setFiltroNome={setFiltroNome}/>
        <main className="main">
          <div className="banner-promocao">
            {!cupomAtivo ? <BannerPromocao aplicacaoCupom={aplicacaoCupom}/> : ''}
          </div>
          <div className="top-filmes">
            <h2>Top Filmes</h2>
            <div className="filmes-grid">
              {movies.slice(0, 5).map(filme => 
                <CardFilme 
                  filme={filme}
                  preencherFavorito={preencherFavorito}
                  adicionarFilmeSacola={adicionarFilmeSacola}/>)}
            </div>
          </div>
          <Filtros filtroPorCategoria={filtroPorCategoria} setFiltroPorCategoria={setFiltroPorCategoria}/>
          <div className="filmes">
              <h2>Filmes</h2>
              <div className="filmes-grid">
              {movies.filter(filtrarFilmeInput).map(filme => 
                <CardFilme 
                  filme={filme}
                  preencherFavorito={preencherFavorito}
                  adicionarFilmeSacola={adicionarFilmeSacola}/>)}
              </div>
              
          </div>
        </main>
        <div className="sacola">
          <Sacola 
            filmesSacola={filmesSacola}
            adicionarFilme={adicionarFilme} 
            removerFilme={removerFilme}
            valorASerPago={valorASerPago}
            setCupomAtivo={setCupomAtivo}
            setValorASerPago={setValorASerPago}
          />
        </div>
    </div>
  );
}

export default App;
