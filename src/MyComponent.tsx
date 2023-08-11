import { useContext } from "react";
import { MyAppContext } from "./MyAppContext";

export interface MyComponentProps { }
export function MyComponent(props: MyComponentProps) {
  const myContextValues = useContext(MyAppContext);
  return <div>
    <h1>MyComponent</h1>
    <div id="property1">Property1: {myContextValues.state.property1}</div>
    <div id="property2">Property2: {myContextValues.state.property2}</div>
  </div>;
}