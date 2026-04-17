import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CategoryProvider from './contexts/CategoryProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CategoryProvider>
      <App />
    </CategoryProvider>
    </BrowserRouter>
  </StrictMode>,
)
