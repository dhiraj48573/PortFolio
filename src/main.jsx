import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * Entry point for the portfolio application.
 * Wrapped in StrictMode for development-time checks.
 * All global styles are in index.css with custom CSS properties.
 * Google Fonts (JetBrains Mono + DM Sans) are loaded via <link> in index.html.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
