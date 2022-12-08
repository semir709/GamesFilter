
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Main from './pages/main/Main'
import Game from './pages/game/Game';
import GameSS from './pages/game_screenshots/GameSS';
import Navbar from './components/navbar/Navbar';
import Sidenav from './components/sidenav/Sidenav';
import { useState } from 'react';

function App() {

  // let [category, setCategory] = useState('games');
  let [query, setQuery] = useState('all');

  // console.log(query, 'query');
  // console.log(category, 'category');

  return (
    <div className="App">
      <div id='overlay'></div>

      <Router>

        <Navbar />

        <div className='d-flex justify-content-between'>

          <Sidenav setQuery={setQuery} />

          <Routes>

            <Route path='/' element={<Main query={query} />} />
            <Route path='/home' element={<Main query={query} />} />
            <Route path='/game' element={<Game />} />
            <Route path='/game/screenshots' element={<GameSS />} />

          </Routes>

        </div>

      </Router>

    </div>
  );
}

export default App;
