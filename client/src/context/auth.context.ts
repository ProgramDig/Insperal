import {createContext} from "react";

interface AuthContext {
  login?:(jwtToken: any, role: any) => void,
  logout?:() => void
}
// @ts-ignore
export const AuthContext = createContext<AuthContext>({login: () => console.log(), logout: () => console.log()});