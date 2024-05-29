import logo from './logo.svg';
import './App.css';

import dp from './images/dp.jpeg'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Form from './components/Forms/Form';

function App() {
  return (
    <BrowserRouter >
      
        <div className="App"  >
            <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
              <Form />
              </div>
            </div>
            </div>
        </div>
      
    </BrowserRouter>
  );
}



export default App;
