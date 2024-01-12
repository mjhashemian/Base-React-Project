import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from "react";
  
  interface AuthContext {
    user: any | null;
    login: (data: { email: string; password: string }) => Promise<void>;
    logout: () => Promise<void>;
    sendPasswordResetEmail: (email: string) => Promise<void>;
    setClient: (data: any) => Promise<void>;
  }
  
  const AuthContext = createContext<AuthContext>({
    user: JSON.parse(localStorage.getItem("user") || "{}") || null,
    login: async () => {},
    logout: async () => {},
    sendPasswordResetEmail: async () => {},
    setClient: async () => {},
  });
  
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  export function AuthProvider({ children }: AuthProviderProps) {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const [user, setUser] = useState<any | null>(
      Object.keys(storedUser).length === 0 ? null : storedUser
    );
  
    useEffect(() => {
      if (user === null) {
        logout();
      }
  
      // TODO: check if token is valid here using api call and then logout if not valid
    }, []);
  
    const login = async (data: { email: string; password: string }) => {
      console.log("login", data);
    };
  
    // eslint-disable-next-line @typescript-eslint/require-await
    const logout = async () => {
      localStorage.removeItem("user");
      setUser(null);
    };
  
    const sendPasswordResetEmail = async (email: string) => {
      console.log("forget password", email);
    };
  
    const setClient = async (data: any) => {
      setUser(data);
    };
  
    const authContextValue: AuthContext = {
      user,
      login,
      logout,
      sendPasswordResetEmail,
      setClient,
    };
  
    return (
      <AuthContext.Provider value={authContextValue}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  // eslint-disable-next-line react-refresh/only-export-components
  export function useAuth() {
    const authContext = useContext(AuthContext);
    if (authContext === undefined) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContext;
  }
  