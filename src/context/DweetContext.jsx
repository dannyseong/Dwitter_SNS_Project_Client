import { createContext, useContext } from 'react';
import DweetService from '../service/dweet';

export const DweetApiContext = createContext();

const dweetApi = new DweetService();

export function DweetApiProvider({ children }) {
  return (
    <DweetApiContext.Provider value={{ dweetApi }}>
      {children}
    </DweetApiContext.Provider>
  );
}

export function useDweetApi() {
  return useContext(DweetApiContext);
}
