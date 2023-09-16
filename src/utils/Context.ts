import React, { createContext, Dispatch, SetStateAction } from 'react';

interface ContextType {
    moduloAtual: string;
    setModuloAtual: Dispatch<SetStateAction<string>>;

}

const Context = createContext<ContextType | undefined>(undefined);

export default Context;