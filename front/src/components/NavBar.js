import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { FormattedMessage } from 'react-intl';

export const NavBar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#main'>
        ISIS3710
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/gallery'>
              <FormattedMessage id='gallery' />
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact-form'>
              <FormattedMessage id='contact' />
            </Link>
          </li>
          <li className='nav-item'>
            {user && (
              <Link className='nav-link' to='/products'>
                <FormattedMessage id='products' />
              </Link>
            )}
          </li>
          <li className='nav-item'>
            {user && (
              <Link className='nav-link' to='/profile'>
                <FormattedMessage id='profile' />
              </Link>
            )}
          </li>
          <li className='nav-item'></li>
        </ul>
      </div>
      <div className='navbar-nav-controls'>
        <LoginButton></LoginButton>
      </div>
    </nav>
  );
};
