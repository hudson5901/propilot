"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthState {
  verified: boolean;
  phone: string;
  setVerified: (phone: string) => void;
}

const AuthContext = createContext<AuthState>({
  verified: false,
  phone: "",
  setVerified: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [verified, setVerifiedState] = useState(false);
  const [phone, setPhone] = useState("");

  const setVerified = (ph: string) => {
    setPhone(ph);
    setVerifiedState(true);
  };

  return (
    <AuthContext.Provider value={{ verified, phone, setVerified }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
