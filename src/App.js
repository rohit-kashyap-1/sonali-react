import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SongsList from './components/SongsList';
import Song from './components/Song';


function App() {
  return (
    <BrowserRouter >
      
        <div className="App"  >
            

            <Routes>
              <Route path="/" element={<SongsList />} />
              <Route path='/song/:id' element={<Song />} />
            </Routes>
        </div>
      
    </BrowserRouter>
  );
}



export default App;
