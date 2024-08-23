import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CountButton from './components/CountButton.jsx'
import Form from './components/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <CountButton />
    <Form />
  </StrictMode>,
)
