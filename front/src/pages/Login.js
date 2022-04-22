import React from 'react';
import { useForm } from "../hooks/useForm";
import "./Login.scss";
import { AuthContext } from '../hooks/AuthContext'

export const Login = () => {
  const { toggle, toggleFunction } = React.useContext(AuthContext);
  const url = "/api/auth/login";

  const [loginValues, handleInputChange] = useForm({
    username: "",
    password: "",
  });

  const { username, password } = loginValues;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginValues),
    });
    
    const data = await resp.json(); 
    if (data.success){
      await toggleFunction(data.token);
      console.log('token1', data.token);
      console.log(toggle);
    }
    else{
      await toggleFunction('');
    }
    
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <hr />

        <div className="form-group">
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Nombre de usuario"
            autoComplete="off"
            value={username}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="password"
            className="form-control"
            placeholder="Contrasenia"
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
