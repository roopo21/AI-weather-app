import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/theme.context.jsx' 
import './index.css'
import App from './App.jsx'
import { WeatherProvider } from './context/weather.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </WeatherProvider>
  </StrictMode>,
)
