
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Main from './pages/main/Main'
import Game from './pages/game/Game';
import GameSS from './pages/game_screenshots/GameSS';
import Navbar from './components/header/Navbar';

function App() {
  return (
    <div className="App">

      <Router>

        <Navbar/>

        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/home' element={<Main />} />
          <Route path='/game' element={<Game />} />
          <Route path='/game/screenshots' element={<GameSS />} />

        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
