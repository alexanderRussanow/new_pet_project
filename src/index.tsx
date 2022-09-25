import { Suspense } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import ThemeProvider from './theme/ThemeProvider'

render(
   <BrowserRouter>
      <ThemeProvider>
         <Suspense fallback={<div>Loading...</div>}>
            <App/>
         </Suspense>
      </ThemeProvider>
   </BrowserRouter>
, document.getElementById('root')
)