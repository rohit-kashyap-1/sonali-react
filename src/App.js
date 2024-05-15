import logo from './logo.svg';
import './App.css';

import dp from './images/dp.jpeg'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import About from './components/About';
import Skills from './components/Skills';
import Qualifications from './components/Qualifications'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      
        <div className="App">
          <div className='container py-4'>
            <div className='row'>
              <div className='col-md-3'>
                <div className='border p-2  rounded'>
                  <div className='p-4 text-center p-4'>
                    <img src={dp} className='img-fluid rounded-circle mb-2 ' />
                    <h4 className='mb-0'>Rohit Singh</h4>
                    <h6 className='fw-light'>Full Stack PHP/Python Developer</h6>
                  </div>

                  
                  <div className='list-group px-2 mb-2'>
                    <div className='list-group-item active'>
                      <Link to={'/about'} className='nav-link' >About Me</Link>
                    </div>
                    <div className='list-group-item'>
                    <Link to={'/skills'} className='nav-link' >Skills</Link>
                    </div>
                    <div className='list-group-item'>
                      <Link to={'/qualifications'} className='nav-link'>Qualifications</Link>
                    </div>
                    <div className='list-group-item'>
                      <Link to={'/work-experience'} className='nav-link'>Work Experience</Link>
                    </div>
                    <div className='list-group-item'>
                      <Link to={'/contact'} className='nav-link'>Contact</Link>
                    </div>
                  </div>
                  

                </div>
              </div>
              <div className='col-md-9'>
                <div className='p-4 rounded border'>
                  <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/qualifications' element={<Qualifications />} />
                    <Route path='/work-experience' element={<Experience />} />
                    <Route path='/contact' element={<Contact />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </BrowserRouter>
  );
}



export default App;
