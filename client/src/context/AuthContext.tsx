import React, { createContext, useContext, useEffect, useState } from "react";

interface UserInfo {
  userId: string | null;
  token: string | null;
  role: string | null;
}

interface AuthContextType {
  user: UserInfo;
  isLoggedIn: boolean;
  login: (userId: string, token: string, role: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserInfo>({
    userId: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
  });

  const isLoggedIn = !!user.token && !!user.userId;

  const login = (userId: string, token: string, role: string) => {
    localStorage.setItem("userId", userId);
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    setUser({ userId, token, role });
  };

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setUser({ userId: null, token: null, role: null });
  };

  // Sync state with localStorage changes (multi-tab)
  useEffect(() => {
    const sync = () => {
      setUser({
        userId: localStorage.getItem("userId"),
        token: localStorage.getItem("token"),
        role: localStorage.getItem("role"),
      });
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
