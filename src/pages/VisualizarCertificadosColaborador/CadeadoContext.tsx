// CadeadoContext.tsx
import React, { createContext, useContext, useState } from 'react';

const CadeadoContext = createContext<{
  cadeadoVisivel: boolean;
  ocultarCadeado: () => void;
  mostrarCadeado: () => void;
}>({
  cadeadoVisivel: true,
  ocultarCadeado: () => {},
  mostrarCadeado: () => {},
});

export function useCadeado() {
  return useContext(CadeadoContext);
}

export function CadeadoProvider({ children }: { children: React.ReactNode }) {
  const [cadeadoVisivel, setCadeadoVisivel] = useState(true);

  const ocultarCadeado = () => {
    setCadeadoVisivel(false);
  };

  const mostrarCadeado = () => {
    setCadeadoVisivel(true);
  };

  return (
    <CadeadoContext.Provider value={{ cadeadoVisivel, ocultarCadeado, mostrarCadeado }}>
      {children}
    </CadeadoContext.Provider>
  );
}