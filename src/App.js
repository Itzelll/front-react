import imageRickMorty from './img/rick-morty.png';
import cv from './img/cv.png';
import './App.css';
import { useState } from "react";
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();
    
    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1 className='title'>Rick & Morty</h1>
      {characters ? (
        <Characters characters={characters} setCharacters={setCharacters} />
      ) : (
        <>
          <img src={imageRickMorty} alt='Rick & Morty' className='img-home'></img>
          <button onClick={reqApi} className='btn-search'>
          Buscar Personajes
          </button>
        </>
      )}
      </header>
      <div className='bottom'>
          <p><img src={cv} alt='cv' className='img-bottom'></img></p>
          <p className='info1'>Información de estudiante:</p>
          <p className='info'>Itzel Mendez Martinez - S20006761</p>
          <p className='info'>zs20006761@estudiantes.uv.mx</p>
          <p className='info'>https://github.com/Itzelll/front-react</p>
      </div>
    </div>
  );
}

export default App; 
