import { useContext } from "react";
import { createContext } from "react";


export const PortFolio = createContext(
{
    IntroVisibility:true,

}


);
export const ContextProvider = PortFolio.Provider
export const usePortfolio=()=>{
    return useContext(PortFolio);

}
