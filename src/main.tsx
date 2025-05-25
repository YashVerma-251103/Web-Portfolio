import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './output.css'

import App from './App' 

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


console.log('Main script executed')
const rootElement = document.getElementById('root')
console.log('Root element found:', rootElement)


if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  console.log('App rendered')
}