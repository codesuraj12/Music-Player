import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'

import Cardsdetails from './Components/Cardsdetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
<Route path='/' element={ <App />} />
 <Route path="/card/:id" element={<Cardsdetails/>} />
   
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
