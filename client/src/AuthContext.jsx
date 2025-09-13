// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [valid, setValid] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/indexRoutes/authentication', { withCredentials: true })
      .then((res) => {
        setValid(true);
        setUser(res.data.data);
      })
      .catch(() => {
        setValid(false);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ valid, user, loading ,setValid , setUser}}>
      {children}
    </AuthContext.Provider>
  );
};
