import React, { useReducer } from 'react'
import { createContext } from "react";

export type modelActionsType = 
    | {type: 'open', payload: boolean}
    | {type: 'close', payload: boolean};

type ModelType = {
    model: false,
    dispatchModel: React.Dispatch<modelActionsType>
};
type ModalContextProps = {
    children: React.ReactNode;
}


const initialModel:boolean = false;
const modelReducer = (state: typeof initialModel,action: modelActionsType) => {
    switch(action.type) {
        case 'open' :
            return state = action.payload
        case 'close' : 
            return false
        default : throw new Error();
    }
}


const ModalContextProvider = createContext<ModelType>(null!);

const ModalContext = (props:ModalContextProps) => {
    const [model,dispatchModel] = useReducer(modelReducer,initialModel);
  return (
    <ModalContextProvider.Provider value={{model,dispatchModel}}>
        {props.children}
    </ModalContextProvider.Provider>
  )
}

export default ModalContext