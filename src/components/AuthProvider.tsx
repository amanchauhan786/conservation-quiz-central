
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: true,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Handle redirect from OAuth providers
    const handleHashRedirect = () => {
      const hash = window.location.hash;
      if (hash && hash.includes('access_token')) {
        // Remove the hash fragment and redirect to home page
        setTimeout(() => {
          // Using navigate in a setTimeout to allow auth state to update first
          navigate('/', { replace: true });
        }, 500);
      }
    };

    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state changed:", event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
        
        // If the user just signed in, redirect to home page
        if (event === 'SIGNED_IN') {
          setTimeout(() => {
            navigate('/', { replace: true });
          }, 500);
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Got existing session:", session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Call this function to handle OAuth redirects
    handleHashRedirect();

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate('/', { replace: true });
  };

  const value = {
    session,
    user,
    loading,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
