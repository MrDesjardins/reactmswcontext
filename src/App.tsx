import './App.css'
import { GraphQLContextProvider } from './GraphQLContext'
import { MyAppContextProvider } from './MyAppContext'
import { MyComponent } from './MyComponent'

export function App() {
  return (
    <GraphQLContextProvider>
      <MyAppContextProvider>
        <div className="App">
          <MyComponent />
        </div>
      </MyAppContextProvider>
    </GraphQLContextProvider>
  )
}