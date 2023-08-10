'use client';
import { firebaseApp } from '@/firebase/config';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, use, useContext, useEffect, useState } from 'react';

const Context = createContext<null | User>(null);
const auth = getAuth(firebaseApp);
export const useFirebaseUserContext = () => {
  const context = useContext(Context);
  return context;
};

export const FirebaseUserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return <Context.Provider value={user}>{children}</Context.Provider>;
};
