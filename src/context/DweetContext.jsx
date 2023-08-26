import { createContext, useContext } from 'react';
import DweetService from '../service/dweet';
import { HttpClient } from '../network/http';

export const DweetApiContext = createContext();

const http = new HttpClient(process.env.REACT_APP_BASE_URL);
const dweetApi = new DweetService(http);

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
