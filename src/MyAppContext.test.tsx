import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { expect } from 'vitest'
import React, { useContext } from 'react'
import { MyAppContext, MyAppContextModel, MyAppContextProvider } from './MyAppContext'

function MyAppContextProviderForTest(props: {
  renderFunction: (c: MyAppContextModel) => React.ReactElement
}) {
  const context = useContext(MyAppContext);
  return props.renderFunction(context);
}

function MyAppContextProviderChangerForTest(props: Partial<MyAppContextModel["state"]>) {
  const context = useContext(MyAppContext);
  if (props.property1 !== undefined) context.actions.setProperty1(props.property1);
  if (props.property2 !== undefined) context.actions.setProperty2(props.property2);
  return <div></div>;
}
function customRender(renderFunction: (c: MyAppContextModel) => React.ReactElement, initialValues: Partial<MyAppContextModel["state"]> = {}) {
  return render(<MyAppContextProvider>
    <MyAppContextProviderForTest renderFunction={renderFunction} />
    <MyAppContextProviderChangerForTest {...initialValues} />
  </MyAppContextProvider>);
}


test('Property 1: Default value', async () => {
  // ARRANGE
  customRender(c => <div data-testid="prop1">{c.state.property1}</div>);

  // ACT
  const prop1 = await screen.findByTestId('prop1')

  // ASSERT
  expect(prop1).toHaveTextContent('Default');
});

test('Property 1: Context value change', async () => {
  // ARRANGE
  customRender(c => <div data-testid="prop1">{c.state.property1}</div>, { property1: "Test" },);

  // ACT
  const prop1 = await screen.findByTestId('prop1')
  screen.debug();
  // ASSERT
  expect(prop1).toHaveTextContent('Test');

  // // ARRANGE
  // customRender({ property1: "Test2" }, c => <div data-testid="prop1">{c.state.property1}</div>);

  // // ACT
  // prop1 = await screen.findByTestId('prop1')

  // // ASSERT
  // expect(prop1).toHaveTextContent('Test2');
});