import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import State from './State.jsx'
import Counter from './Counter.jsx'
import CheckBoxes from './CheckBoxes.jsx'
import HandleDropdown from './HandleDropdown.jsx'
import LoopinJSX from './LoopinJSX.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <State/>
    <Counter/> */}
    {/* <CheckBoxes/> */}
    {/* <HandleDropdown/>  */}
    {/* <LoopinJSX/> */}
  </StrictMode>,
)
 