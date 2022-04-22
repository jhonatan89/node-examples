import './App.scss';
import { ContactForm } from './pages/ContactForm';
import { Login } from './pages/Login';
import { NavBar } from './components/NavBar';
import { Gallery } from './pages/Gallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Products } from './pages/Products';
import { AuthContext } from './hooks/AuthContext'
import React from "react";

function App() {
  const { toggle } = React.useContext(AuthContext);
  
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Gallery></Gallery>} />
          <Route exact path='/gallery' element={<Gallery></Gallery>} />
          {toggle !== '' ? <Route exact path='/products' element={<Products></Products>}/> : <></>}
          <Route exact path='/contact-form' element={<ContactForm></ContactForm>} />
          <Route exact path='/login' element={<Login></Login>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
