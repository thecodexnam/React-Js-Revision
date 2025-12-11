import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import State from './State.jsx'
import Counter from './Counter.jsx'
import CheckBoxes from './CheckBoxes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <State/>
    <Counter/> */}
    <CheckBoxes/>
  </StrictMode>,
)
 