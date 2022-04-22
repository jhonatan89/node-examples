import React from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [toggle, setToggle] = React.useState('');

  const toggleFunction = (value) => {
    setToggle(value);
  };

  return (
    <AuthContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };