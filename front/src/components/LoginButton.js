import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FormattedMessage } from 'react-intl';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      {!isAuthenticated ? (
        <button className='btn btn-success' onClick={() => loginWithRedirect()}>
          <FormattedMessage id='login' />
        </button>
      ) : (
        <div className='btn-group' role='group'>
          <button
            id='btnGroupDrop1'
            type='button'
            className='btn btn-primary dropdown-toggle'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            {`Hello, ${user.name}`}
          </button>
          <ul className='dropdown-menu' aria-labelledby='btnGroupDrop1'>
            <li>
              <a className='dropdown-item' onClick={() => logout()}>
                <FormattedMessage id='logout' />
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default LoginButton;
