import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Context/UserContext.jsx'
import Story from './Context/story.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Story>
  <UserContext>
    <App />
  </UserContext>
    </Story>
  </StrictMode>


)
