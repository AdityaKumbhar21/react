import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(  // render is used to render the app in the root div
  <React.StrictMode>
   
    <App />    {/* This is basically a customized HTML tag created using react  */}
  </React.StrictMode>,
)
