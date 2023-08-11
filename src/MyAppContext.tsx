import { PropsWithChildren, createContext, useMemo, useState } from 'react';

export interface MyAppContextModel {
  state: {
    property1: string;
    property2: number;
  },
  actions: {
    setProperty1: (newValue: string) => void;
    setProperty2: (newValue: number) => void;
  }
}
export const MyAppContext = createContext<MyAppContextModel>({} as MyAppContextModel); // Default will be defined in the Provider below

export interface MyAppContextProviderProps extends PropsWithChildren { }
export function MyAppContextProvider(props: MyAppContextProviderProps) {
  const [property1, setProperty1] = useState("Default");
  const [property2, setProperty2] = useState(10);
  const state = useMemo(() => ({ property1, property2 }), [property1, property2]);

  const actions = useMemo(() => ({
    setProperty1: (newValue: string) => setProperty1(newValue),
    setProperty2: (newValue: number) => setProperty2(newValue),
  }), []);
  return <MyAppContext.Provider value={{ state, actions }}>
    {props.children}
  </MyAppContext.Provider>;
}