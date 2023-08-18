import { createContext, useContext } from 'react';
import DweetService from '../service/dweet';

export const DweetApiContext = createContext();

const dweetApi = new DweetService(process.env.REACT_APP_BASE_URL);

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
