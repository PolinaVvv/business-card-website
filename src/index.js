import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Screens
import App from './screens/App'
// import Home from './screens/Home'
import NotFound from './screens/NotFound'

// Imgs
import legsAndFire from './assets/imgs/legs_and_fire2.jpg'

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      body: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: legsAndFire,
        backgroundSize: 'cover',
        backgroundPositionX: '30%',
      },
    },
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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
