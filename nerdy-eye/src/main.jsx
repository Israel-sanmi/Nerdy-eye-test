import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MovieAppProvider from './Components/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MovieAppProvider>
    <App />
  </MovieAppProvider>
)
