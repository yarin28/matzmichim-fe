import { createContext, SetStateAction, useState, useContext } from "react";
export interface IAuth {
    login(user: SetStateAction<String | null>): void;
    user: any
    logout: () => void;

}
const UserAuthContext = createContext<IAuth>({ login() { }, user: null, logout: () => { } });
export const UserAuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<String | null>(null);
    /**
     * the Main login function, there should be  a way to enter the 6 digit code
     * @param email the email the be sent the auth code! 
     * if the user has received the 200 http code the email should have 
     * been sent. in here the webApp should redirect the user to the 6 digit code place
     */
    const login = (email: SetStateAction<String | null>): void => {
        let FD = new FormData();
        FD.append("email", email!.toString());
        const response = fetch("http://localhost:8090/login", {
            method: "POST",
            body: FD,
        }).then(response => response.json()).then(response => {
            if (response.status == 200/*good http response*/){
                setUser(user);
            return true;
            }
            else{
                console.log("there was an error from the server!")
            }
        });
    }
    const logout = (): void => {
        setUser(null);
    }
    return (
        <UserAuthContext.Provider value={{ user, login: login, logout }}>
            {children}
        </UserAuthContext.Provider>)
}
export const useUserAuth = () => useContext(UserAuthContext);
export default useUserAuth;