// contexts/GlobalState.js
import { createContext, useReducer, useEffect } from 'react';
import { useRouter } from 'next/router'

const initialState = {
  openSearch: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'open':
      return { openSearch: true };
    case 'close':
      return { openSearch: false };
    default:
      throw new Error('Unexpected action');
  }
};

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  useEffect(() => {
    // Use the router here
    console.log("change content")
  }, [router]);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};