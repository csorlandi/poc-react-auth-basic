import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import history from "../services/history";

interface Props {
  children?: React.ReactNode;
}

interface User {
  name: string;
}

interface AuthContextData {
  signed: boolean;
  signIn: () => void;
  signOut: () => void;
  loading: boolean;
  user: User;
}

const initialState = {
  signed: false,
  setSigned: () => {},
  signIn: () => {},
  signOut: () => {},
  loading: true,
  user: {
    name: '',
  }
}

const AuthContext = createContext<AuthContextData>(initialState);

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>(initialState.user);
  const [loading, setLoading] = useState(initialState.loading);
  const [signed, setSigned] = useState(initialState.signed);

  useEffect(() => {
    const storedToken = localStorage.getItem('@Auth:token');
    const storedUser = localStorage.getItem('@Auth:user');

    if (storedToken && storedUser) {
      api.defaults.headers.authorization = `Bearer ${storedToken}`;
      setUser(JSON.parse(storedUser));
      setSigned(true);
    }

    setLoading(false);
  }, []);

  async function signIn() {
    try {
      setLoading(true);
      const { data } = await api.post('signin');

      const apiUser = {
        name: data.name,
      };

      api.defaults.headers.authorization = `Bearer ${data.token}`;

      localStorage.setItem('@Auth:token', data.token);
      localStorage.setItem('@Auth:user', JSON.stringify(apiUser));

      setUser(apiUser);
      setSigned(true);
      setLoading(false);

      history.push('/dashboard');
    } catch(err) {}
  }

  async function signOut() {
    await localStorage.removeItem('@Auth:token');
    await localStorage.removeItem('@Auth:user');

    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, signOut, loading, user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };
