import {
  Button,
  Flex,
  Spacer,
  Heading,
  Stack,
  Center,
  Text,
  Image,
  Box,
} from '@chakra-ui/react'

// Fonts
import '@fontsource/montserrat/400.css'
// import Menu from '../components/menu'

// Imgs
import legsAndFire from '../assets/imgs/legs_and_fire2.jpg'
import danya from '../assets/imgs/danya2.png'
import girl from '../assets/imgs/girl2.png'

function App() {
  // const textMenu = ['О фотографе', 'Портфолио', 'Отзывы', 'Цены', 'Контакты']
  return (
    <div>
      <Flex
        direction='column' // расставляет в столбец эл флекса
        minH='100vh' // устанавливает минимальную высоту элемента
        maxW='100vw' // Устанавливает ширину содержимого элемента
        px={{ base: '1em', lg: '5em' }} // заполнение встроенного начала + заполнение встроенного конца
        backgroundImage={legsAndFire}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundPosition={{ base: '27% ', lg: 'top' }}
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
            {/* {textMenu.map((e) => (
              <Menu text={e} />
            ))} */}
            <Text fontSize='2xl'>О фотографе</Text>
            <Text fontSize='2xl'>Портфолио</Text>
            <Text fontSize='2xl'>Отзывы</Text>
            <Text fontSize='2xl'>Цены</Text>
            <Text fontSize='2xl'>Контакты</Text>
          </Stack>
        </Stack>
        <Stack
          marginY={{ base: '1em', lg: '6em' }} // поле сверху + поле снизу
          alignItems={{ lg: 'start' }} // выровнять элементы
          direction={{ base: 'column-reverse', lg: 'row' }}
          spacing={{ base: '1em', lg: '0.5em' }} // интервал между к-либо элементами
          flex='1'
        >
          <Center flex='1' marginTop={{ lg: '4em' }} paddingLeft={{ lg: 'em' }}>
            <Button
              colorScheme='orange' // цвет при тыке
              variant='outline'
              borderColor='rgba(143, 91, 55, 1)'
              _hover={{ bg: 'rgba(143 91 55 / 30%)' }}
              size='lg'
              borderRadius='0em'
              border='0.17em solid'
              color='rgba(202, 200, 185, 1)'
              fontWeight='500'
              fontSize='1.3em'
              width='210px'
              height='70px'
            >
              Записаться <br />
              на съёмку
            </Button>
          </Center>
          <Spacer />
          <Heading
            flex='2'
            color='rgba(202, 200, 185, 1)'
            fontWeight='800'
            textAlign='start'
            lineHeight='1.2' // величина пространства между строками
            size='2xl'
          >
            В поисках фотографии <br /> я нахожу нечто более прекрасное, чем{' '}
            <br />
            просто мир
          </Heading>
        </Stack>
        <Spacer />
      </Flex>
      <Flex
        backgroundColor='rgba(202, 200, 185, 1)'
        px={{ base: '1em', lg: '5em' }} // заполнение встроенного начала + заполнение встроенного конца
        direction='column' // расставляет в столбец эл флекса
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          flex='1'
          pt={{ lg: '2em' }} // обивка Верх
          spacing={{ base: '0.5em', lg: '1em' }} // интервал между к-либо элементами
          align='end' // как элементы располагаются вдоль поперечной оси на текущей строке
        >
          <Heading
            marginTop={{ base: '1em', lg: '0.1em' }} // поля сверху
            fontWeight='700'
            size='2xl'
            textAlign='center' // как линейное содержимое, наподобие текста, выравнивается в блоке его родительского элемента
            color='rgba(0, 0, 0, 1)'
            flex='2'
            pr={{ base: '1.7em', lg: '0em' }}
            paddingBottom={{ lg: '0.5em' }}
          >
            Обо мне
          </Heading>
          <Spacer />

          <Text
            color='rgba(0, 0, 0, 1)'
            fontSize={{ base: 'xl', lg: '3xl' }}
            fontWeight='700'
            flex='4'
            paddingTop={{ base: '0em', lg: '0.1em' }}
          >
            Hello World! Меня зовут Даня, и я фотограф.
          </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          // pt={{ lg: '1em' }} // обивка Верх
          spacing={{ base: '1em', lg: '1em' }} // интервал между к-либо элементами
          align='start' // как элементы располагаются вдоль поперечной оси на текущей строке
        >
          <Box
            boxSize={{ base: 'xxs', lg: 'xl' }}
            mt={{ base: '1em', lg: '1em' }}
            flex='4'
          >
            <Image src={danya} />
          </Box>
          <Stack
            direction={{ base: 'column', lg: 'column' }}
            spacing={{ base: '1em', lg: '1.2em' }} // интервал между к-либо элементами
            color='rgba(48, 42, 38, 1)'
            fontSize={{ base: 'xs', lg: 'xl' }}
            fontWeight='500'
            flex='5'
          >
            <Text mt={{ lg: '3em' }}>
              Профессионально занимаюсь фотографией более 3-х лет.
            </Text>
            <Text>
              <u>Индивидуальный подход </u>к каждому - это не только отличные
              фотографии, но и полученные от встречи эмоции!
            </Text>
            <Text as='u' textAlign='left' pl={{ base: '6em', lg: '15em' }}>
              За что я люблю фотографии?{' '}
            </Text>
            <Text pb={{ base: '2em' }}>
              Фотография - это раскрытие своего творческого потенциала, душевных
              переживаний и эмоций в конкретный момент времени. Также она
              является зеркалом, отражающим всё то, что бережно хранится в
              человеке.
            </Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        backgroundColor='rgba(202, 200, 185, 1)'
        direction='column' // расставляет в столбец эл флекса
        minH='100vh' // устанавливает минимальную высоту элемента
        maxW='100vw' // Устанавливает ширину содержимого элемента
        px={{ base: '1em', lg: '5em' }} // заполнение встроенного начала + заполнение встроенного конца
        backgroundImage={girl}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        backgroundPosition={{ base: '50% ', lg: 'top' }}
      >
        <Stack paddingLeft='0.5em'>
          <Heading
            marginTop={{ base: '8em', lg: '12.9em' }} // поля сверху
            fontWeight='700'
            size={{ base: 'xl', lg: '4xl' }}
            textAlign='top' // как линейное содержимое, наподобие текста, выравнивается в блоке его родительского элемента
            color='rgba(202, 200, 185, 1)'
          >
            Моё <br />
            портфолио
          </Heading>
          <Spacer />
        </Stack>
      </Flex>
    </div>
  )
}

export default App
