import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

export const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(null);

  async function getToken() {
    const token = await getAccessTokenSilently();
    setToken(token);
  }

  return (
    <>
      {user && isAuthenticated && (
        <div>
          <img style={{ width: '5rem' }} src={user.picture} alt={user.name} />
          <JSONPretty id='json-pretty' data={user}></JSONPretty>
          {token && (
            <p>
              Token <span>{token}</span>
            </p>
          )}
          <button className='btn btn-success' onClick={getToken}>
            Get token
          </button>
        </div>
      )}
    </>
  );
};
