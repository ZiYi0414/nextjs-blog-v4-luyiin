import React, { createContext, useReducer } from 'react';

export const LangContext = createContext({});

export const UPDATE_LANG = 'UPDATE_LANG';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_LANG:
      return action.lang;
    default:
      return state;
  }
};

export const Lang = ({ children }: { children: React.ReactNode }) => {
  const [lang, dispatch] = useReducer(reducer, 'zh');
  return (
    <LangContext.Provider value={{ lang, dispatch }}>
      {children}
    </LangContext.Provider>
  );
};
