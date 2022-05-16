import React, { useState } from 'react';
import './App.scss';
import { ContactForm } from './pages/ContactForm';
import { NavBar } from './components/NavBar';
import { Gallery } from './pages/Gallery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Products } from './pages/Products';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';

import { UserContext } from './context/UserContext';

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route exact path='/gallery' element={<Gallery></Gallery>} />
            <Route
              exact
              path='/contact-form'
              element={<ContactForm></ContactForm>}
            />
            <Route exact path='/products' element={<Products></Products>} />
            <Route exact path='/login' element={<Login></Login>} />
            <Route exact path='/profile' element={<Profile></Profile>} />
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
