import {
  Button,
  Image,
  Box,
  Flex,
  Spacer,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react'
import './App.css'
import legsAndFire from './legs_and_fire2.jpg'
import '@fontsource/montserrat/400.css'

function App() {
  return (
    <div className='App'>
      <Flex>
        <Box
          backgroundSize='cover'
          h='100vh'
          w='100vw'
          backgroundRepeat='no-repeat'
          backgroundImage={legsAndFire}
        >
          <Flex color='rgba(202, 200, 185, 1)' mt='2.5em'>
            <Heading fontWeight='800' size='2xl' pl='1.9em' pt='0.2em'>
              @naitiphoto
            </Heading>
            <Spacer />
            <HStack fontWeight='300' spacing='3.8em' pr='3.3em'>
              <Text fontSize='2xl'>О фотографе</Text>
              <Text fontSize='2xl'>Портфолио</Text>
              <Text fontSize='2xl'>Отзывы</Text>
              <Text fontSize='2xl'>Цены</Text>
              <Text fontSize='2xl'>Контакты</Text>
            </HStack>
          </Flex>
          <Flex mt='9em' pl='5em'>
            <Button
              colorScheme='teal'
              variant='outline'
              borderColor='rgba(143, 91, 55, 1)'
              _hover={{ bg: 'rgba(143 91 55 / 30%)' }}
              size='lg'
              align='center'
              padding='2em'
              borderRadius='0em'
              border='0.2em solid'
              color='rgba(202, 200, 185, 1)'
              fontWeight='500'
              pos='absolute'
              mt='2.9em'
              margin='4em 3em 0em 3em'
            >
              Записаться на съёмку
            </Button>
            <Spacer />
            <Heading
              color='rgba(202, 200, 185, 1)'
              fontWeight='800'
              size='2xl'
              pl='12.9em'
              pt='0.2em'
              pr='3em'
              textAlign='start'
              lineHeight='1.2'
            >
              В поисках фотографии я нахожу нечто более прекрасное, чем просто
              мир
            </Heading>
          </Flex>
        </Box>
      </Flex>
    </div>
  )
}

export default App
