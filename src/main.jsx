import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/Index.js'
import { AuthProvider } from './ContextApi/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store = {store}>
      <AuthProvider>
    <App />
      </AuthProvider>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
   document.getElementById('root')
)
