import { StrictMode } from 'react'
import App from './App.jsx'
import "./App.css"
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './stores';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
