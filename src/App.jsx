// filepath: /C:/Users/Teq Admin/OneDrive/Desktop/React Js/spotify-clone/src/App.jsx
import React, { useContext, useReducer, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { PlayerContext } from './context/PlayerContext';

const App = () => {
  const { audioRef } = useContext(PlayerContext);


  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} preload='auto'></audio>
    </div>
  );
}

export default App;