import { createContext, useEffect, useState } from "react";
import { fetchApi } from '../lib/utils';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(); // User = { token: string, email: string, nome: string }

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const signin = (email, senha) => {
    return fetchApi('auth/signin', 'POST', { email, senha })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem('user', JSON.stringify(json));
        setUser(json);
      });
  };

  const signup = (nome, email, senha) => {
    return fetchApi('auth/signup', 'POST', { nome, email, senha })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem('user', JSON.stringify(json));
        setUser(json);
      });
  };

  const signout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const fetchApiAuth = (url, method, body = undefined) => {
    const token = user ? user.token : undefined;
    return fetchApi(url, method, body, token);
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout, fetchApiAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
