
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

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';


const queryClient = new QueryClient();

function App() {
  // let [query, setQuery] = useState('all');

  const [newSelected, setNewSelected] = useState('All Games');

  return (
    <div className="App">
      <div id='overlay'></div>

      <Router>

        <Navbar setNewSelected={setNewSelected} />

        <div className='d-flex justify-content-between'>

          <div className='sidenav-wrapper'>
            <Sidenav setNewSelected={setNewSelected} />
          </div>


          <QueryClientProvider client={queryClient}>
            <Routes>

              <Route path='/:category' element={<Main text={newSelected} />} />
              <Route path='/:category/:filter' element={<Main text={newSelected} />} />
              <Route path='/' element={<Main text={newSelected} />} />
              <Route path='/:filter' element={<Main text={newSelected} />} />
              {/* <Route path='/home' element={<Main query={query} />} /> */}
              <Route path='/game/:id' element={<Game />} />
              <Route path='/game/:id/screenshots' element={<GameSS />} />

            </Routes>

          </QueryClientProvider>

        </div>

      </Router>

    </div>
  );
}

export default App;
