import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provedor } from './Context'
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provedor>
      <App />
    </Provedor>
  </React.StrictMode>,
)
