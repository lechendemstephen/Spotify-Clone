// filepath: /C:/Users/Teq Admin/OneDrive/Desktop/React Js/spotify-clone/src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PlayerContextProvider from './context/PlayerContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <App />

      </PlayerContextProvider>

    </BrowserRouter>

  </React.StrictMode>
);