import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SolarSystemProvider from './context/SolarSystemContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SolarSystemProvider>
      <App /> 
    </SolarSystemProvider>
  </React.StrictMode>,
)
