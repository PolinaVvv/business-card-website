import { Button, Flex, Spacer, Heading, Stack, Center } from '@chakra-ui/react'

// Fonts
import '@fontsource/montserrat/400.css'
import Menu from '../components/menu'

function App() {
  const textMenu = ['О фотографе', 'Портфолио', 'Отзывы', 'Цены', 'Контакты']
  return (
    <Flex
      direction='column' // расставляет в столбец эл флекса
      minH='90vh' // устанавливает минимальную высоту элемента
      w='100vw' // Устанавливает ширину содержимого элемента
      px={{ base: '1em', lg: '5em' }} // заполнение встроенного начала + заполнение встроенного конца
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        flex='1'
        color='rgba(202, 200, 185, 1)'
        pt={{ lg: '3.1em' }} // обивка Верх
        spacing={{ base: '2em', lg: '2em' }} // интервал между к-либо элементами
        justifyContent={{ base: 'normal', lg: 'space-between' }} //определяет, как браузер распределяет пространство между и вокруг элементов контента вдоль главной оси flex контейнера, или вдоль строчной оси grid контейнера
      >
        <Heading
          marginTop={{ base: '1em', lg: '0.1em' }} // поля сверху
          fontWeight='800'
          size='2xl'
          textAlign={{ base: 'center' }} // как линейное содержимое, наподобие текста, выравнивается в блоке его родительского элемента
        >
          @naitiphoto
        </Heading>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          fontWeight='300'
          spacing={{ base: '0.1em', lg: '3.4em' }}
          fontSize={{ base: 'xl', lg: '2xl' }}
        >
          {textMenu.map((e) => (
            <Menu text={e} />
          ))}
        </Stack>
      </Stack>
      <Stack
        marginY={{ base: '1em', lg: '0' }} // поле сверху + поле снизу
        alignItems={{ lg: 'start' }} // выровнять элементы
        direction={{ base: 'column-reverse', lg: 'row' }}
        spacing={{ base: '1em', lg: '1em' }} // интервал между к-либо элементами
        flex='1'
      >
        <Center flex='1' marginTop={{ lg: '6em' }}>
          <Button
            colorScheme='orange' // цвет при тыке
            variant='outline'
            borderColor='rgba(143, 91, 55, 1)'
            _hover={{ bg: 'rgba(143 91 55 / 30%)' }}
            size='lg'
            borderRadius='0em'
            border='0.2em solid'
            color='rgba(202, 200, 185, 1)'
            fontWeight='500'
            fontSize='1.3em'
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
