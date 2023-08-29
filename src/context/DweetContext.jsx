import { createContext, useContext } from 'react';

export const DweetApiContext = createContext();

export function DweetApiProvider({ dweetService, children }) {
  const dweetApi = dweetService;
  return (
    <DweetApiContext.Provider value={{ dweetApi }}>
      {children}
    </DweetApiContext.Provider>
  );
}

export function useDweetApi() {
  return useContext(DweetApiContext);
}
