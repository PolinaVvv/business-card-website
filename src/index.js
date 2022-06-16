import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './screens/App'
import legsAndFire from './assets/imgs/legs_and_fire2.jpg'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

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
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
