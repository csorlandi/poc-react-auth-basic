import { createContext, useEffect, useState } from "react";
import api from "../services/api";

interface Props {
  children?: React.ReactNode;
}

interface User {
  name: string;
}

interface AuthContextData {
  signed: boolean;
  signIn: () => void;
  loading: boolean;
  user: User;
}

const initialState = {
  signed: false,
  setSigned: () => {},
  signIn: () => {},
  loading: false,
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
    } catch(err) {}
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, loading, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };
