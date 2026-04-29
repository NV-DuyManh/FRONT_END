import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CategoryProvider from './contexts/CategoryProvider.jsx'
import CategoryTypeProvider from './contexts/CategoryTypeProvider.jsx'
import ActorProvider from './contexts/ActorProvider.jsx'
import AuthorProvider from './contexts/AuthorProvider.jsx'
import CharacterProvider from './contexts/CharacterProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <CategoryTypeProvider>
          <ActorProvider>
            <AuthorProvider>
              <CharacterProvider>
                <App />
              </CharacterProvider>
            </AuthorProvider>
          </ActorProvider>
        </CategoryTypeProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>,
)
