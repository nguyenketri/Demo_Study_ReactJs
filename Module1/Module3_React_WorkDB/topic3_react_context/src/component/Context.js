import { useState, createContext } from "react";

 const themConT = createContext();

function ThemProvider({children}){
  const [theme,setTheme] = useState('dark')
  const change= () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
   const value ={
    theme,
    change
   }
    return(
   <themConT.Provider value={value}>
     {children}
   </themConT.Provider>
    )
}
export {themConT, ThemProvider}