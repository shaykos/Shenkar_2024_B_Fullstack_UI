import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MemberContextProvider from './context/memberContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MemberContextProvider>
      <App /> {/* children */}
    </MemberContextProvider>
  </React.StrictMode>,
)
