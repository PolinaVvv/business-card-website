import { Button, Flex, Spacer, Heading, Stack, Center } from '@chakra-ui/react'

// Fonts
import '@fontsource/montserrat/400.css'
import Menu from '../components/menu'

function App() {
  const textMenu = ['О фотографе', 'Портфолио', 'Отзывы', 'Цены', 'Контакты']
  return (
    <Flex
      direction='column' // расставляет в столбец эл флекса
      minH='100vh' // устанавливает минимальную высоту элемента
      w='100vw' // Устанавливает ширину содержимого элемента
      px={{ base: '1em', lg: '4em' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        flex='1'
        color='rgba(202, 200, 185, 1)'
        pt={{ lg: '4em' }}
        spacing={{ base: '2em', lg: '2em' }}
        justifyContent={{ base: 'normal', lg: 'space-between' }}
      >
        <Heading
          mt={{ base: '1em', lg: '0' }}
          fontWeight='800'
          size='2xl'
          textAlign={{ base: 'center' }}
        >
          @naitiphoto
        </Heading>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          fontWeight='300'
          spacing={{ base: '0.5em', lg: '3.8em' }}
        >
          {textMenu.map((e) => (
            <Menu text={e} />
          ))}
        </Stack>
      </Stack>
      <Stack
        my={{ base: '1em', lg: '0' }}
        alignItems={{ lg: 'center' }}
        direction={{ base: 'column-reverse', lg: 'row' }}
        spacing={{ base: '1em', lg: '0.5em' }}
        flex='1'
      >
        <Center flex='1'>
          <Button
            colorScheme='teal'
            variant='outline'
            borderColor='rgba(143, 91, 55, 1)'
            _hover={{ bg: 'rgba(143 91 55 / 30%)' }}
            size='lg'
            borderRadius='0em'
            border='0.2em solid'
            color='rgba(202, 200, 185, 1)'
            fontWeight='500'
          >
            Записаться на съёмку
          </Button>
        </Center>
        <Spacer />
        <Heading
          flex='2'
          color='rgba(202, 200, 185, 1)'
          fontWeight='800'
          size='2xl'
          textAlign='start'
          lineHeight='1.2'
        >
          В поисках фотографии я нахожу нечто более прекрасное, чем просто мир
        </Heading>
      </Stack>
      <Spacer />
    </Flex>
  )
}

export default App
