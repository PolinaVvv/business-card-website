import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Screens
import App from './screens/App'
import Test from './screens/Test'
import NotFound from './screens/NotFound'

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
})

export default theme

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/business-card-website'
          element={
            <ChakraProvider theme={theme}>
              <App />
            </ChakraProvider>
          }
        />
        <Route
          path='/Test'
          element={
            <ChakraProvider>
              <Test />
            </ChakraProvider>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
