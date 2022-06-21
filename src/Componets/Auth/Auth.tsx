import { createContext, SetStateAction, useState, useContext } from "react";
export interface IAuth {
    signIn(user: SetStateAction<String|null>) :void;
    user : any 
    logout : () => void;

}
const AuthContext = createContext<IAuth>({signIn(){},user:null,logout:()=>{}});
export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<String|null>(null);
    const signIn = (user: SetStateAction<String|null>):void => {
        setUser(user);
    }
    const logout = () :void => {
        setUser(null);
    }
    return (
    <AuthContext.Provider value={{ user, signIn, logout }}>
        {children}
    </AuthContext.Provider>)
}
 const useAuth = () => useContext(AuthContext);
export default useAuth;