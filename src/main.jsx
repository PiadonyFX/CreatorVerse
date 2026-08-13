import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/components/Toast.css";
import "./styles/components/backButton.css";
import "./styles/components/aboutModal.css";
import "./styles/components/aboutButton.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
