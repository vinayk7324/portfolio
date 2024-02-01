import { useContext } from "react";
import { createContext } from "react";
import Img from '../assets/th1.jpg'

export const PortFolio = createContext(
{
    IntroVisibility:true,

}


);
export const ContextProvider = PortFolio.Provider
export const usePortfolio=()=>{
    return useContext(PortFolio);

}
