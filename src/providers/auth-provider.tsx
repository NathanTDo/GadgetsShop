import { Session, User } from '@supabase/supabase-js';
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
  useContext,
} from 'react';
import { supabase } from '../lib/supabase';

type AuthData = {
  session: Session | null;
  user: any;
  mounting: boolean;
};

const AuthContext = createContext<AuthData>({
  session: null,
  user: null,
  mounting: true,
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [mounting, setMounting] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);

      if (session) {
        const { data: user, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', session.user.id)
          .single();

        if (error) {
          console.error(error);
        } else {
          setUser(user);
        }
      }

      setMounting(false);
    };

    fetchSession();
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ session, user, mounting }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
